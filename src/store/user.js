import * as fb from 'firebase'
import aes from 'crypto-js/aes'
//import encutf8 from 'crypto-js/enc-utf8'

/*class User {
    constructor (firstName, middleName, lastName, email, password, avatarSrc, id) {
        firstName ? this.firstName = firstName : false
        middleName ? this.middleName = middleName : false
        lastName ? this.lastName = lastName : false
        email ? this.email = email : false
        password ? this.password = password : false
        avatarSrc ? this.avatarSrc = avatarSrc : false
        id ? this.id = id : false
    }
}*/

class User {
    constructor (userData) {
        userData.firstName ? this.firstName = userData.firstName : false
        userData.middleName ? this.middleName = userData.middleName : false
        userData.lastName ? this.lastName = userData.lastName : false
        userData.email ? this.email = userData.email : false
        userData.password ? this.password = userData.password : false
        userData.birthday ? this.birthday = userData.birthday : false
        userData.avatarSrc ? this.avatarSrc = userData.avatarSrc : false
        userData.id ? this.id = userData.id : false
    }
}

export default {
    state: {
        userAuth: false,
        userActive: null,
        userUnderFocus: {
            id: null,
            name: null,
            middleName: null,
            surname: null,
            avatarSrc: null
        },
        userEventFlags: {
            justRegistered: false
        }
    },
    mutations: {
        userLogin (state, payload) {
            state.userAuth = true
            state.userActive = payload
        },
        userLogOut (state) {
            state.userAuth = false
            state.userActive = null
        },
        setUserJustRegisteredFlag (state, payload) {
            state.userEventFlags.justRegistered = payload
        },
        setUserUnderFocus (state, payload) {
            state.userUnderFocus.id = payload.id
            state.userUnderFocus.name = payload.firstName
            state.userUnderFocus.middleName = payload.middleName
            state.userUnderFocus.surname = payload.lastName
            state.userUnderFocus.avatarSrc = payload.avatarSrc
        },
        unsetUserUnderFocus (state) {
            state.userUnderFocus.id = state.userUnderFocus.name = state.userUnderFocus.middleName = state.userUnderFocus.surname = state.userUnderFocus.avatarSrc = null
        }
    },
    actions: {
        async userRegister ({commit}, {firstName, middleName, lastName, email, password}) {

            //try {
                //commit('')
                //console.log(context)
                
                // Create user with email and pass.
                // [START createwithemail]
                const newUser = await fb.auth().createUserWithEmailAndPassword(email, password)

                const user = new User({firstName, middleName, lastName, email, password, id: newUser.user.uid})

                const encPassword = aes.encrypt(user.password, user.id).toString()
                
                user.password = encPassword

                await fb.database().ref(`users/${newUser.user.uid}`).update(user)

                commit('setUserJustRegisteredFlag', true)
            
            /*} catch (error) {

                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
                } else {
                alert(errorMessage);
                }
                console.log(error);
                // [END_EXCLUDE]
            }*/
            // [END createwithemail]

        },
        async userLogin ({commit}, payload) {
            
            //try {
                const auth = await fb.auth().signInWithEmailAndPassword(payload.email, payload.password)
                //console.log(auth)
                const dbData = await fb.database().ref('users').child(auth.user.uid).once('value')
                const userData = dbData.val()
                commit('userLogin', userData)
                //commit('userLogin', auth.user.uid)
            /*} catch (error) {
                throw(error)
            }*/
        },
        async userLogOut ({commit}) {
          fb.auth().signOut().then(function() {
               commit('userLogOut')
            }).catch(function(error) {
               console.log(error)
            });
        },
        recoverPassword () {
               
            // Decrypt
            //const bytes = aes.decrypt(encPassword, userId)
            //const originalText = bytes.toString(encutf8)

            //console.log(originalText)
        },
        setUserJustRegisteredFlag ({commit}, payload) {
            commit('setUserJustRegisteredFlag', payload)
        },
        async setUserUnderFocus ({commit}, payload) {
            //console.log(payload)
            //console.log(commit)
            try { 
                const userData = await fb.database().ref('/users/' + payload).once('value')
                const user = userData.val()
                commit('setUserUnderFocus', user) 
            } catch {
                console.log('no such user')
            }
        },
        async editUserProfile ({commit}, payload) {

            let avatarSrc = null

            if (payload.avatar) {
                
                const fileData = await fb.storage().ref(`profiles/${payload.id}.png`).putString(payload.avatar, 'data_url')

                avatarSrc = await fileData.ref.getDownloadURL().then(function(downloadURL) {
                    return downloadURL
                })
            }
            
            const profileUpdate = new User ({
                firstName: payload.firstName,
                middleName: payload.middleName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
                birthday: payload.birthday,
                avatarSrc,
            })

            await fb.database().ref('users').child(payload.id).update(profileUpdate)

            profileUpdate.id = payload.id

            commit('setUserUnderFocus', profileUpdate)
        }
    },
    getters: {
        userAuth (state) {
            return state.userAuth
        },
        userActive (state) {
            return state.userActive
        },
        userUnderFocus (state) {
            return state.userUnderFocus
        },
        userJustRegisteredFlag (state) {
            return state.userEventFlags.justRegistered
        }
    }
}