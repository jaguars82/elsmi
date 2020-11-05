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
        userData.contactEmail ? this.contactEmail = userData.contactEmail : false
        userData.password ? this.password = userData.password : false
        userData.birthday ? this.birthday = userData.birthday : false
        userData.gender ? this.gender = userData.gender : false
        userData.position ? this.position = userData.position : false
        userData.organization ? this.organization = userData.organization : false
        userData.educationLevel ? this.educationLevel = userData.educationLevel : false
        userData.qualifyingCategory ? this.qualifyingCategory = userData.qualifyingCategory : false
        userData.subjects ? this.subjects = userData.subjects : false
        userData.countryCode ? this.countryCode = userData.countryCode : false
        userData.phone ? this.phone = userData.phone : false
        userData.country ? this.country = userData.country : false
        userData.region ? this.region = userData.region : false
        userData.settlement ? this.settlement = userData.settlement : false
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
            // TO DO make a condition to load private data if user is authorized
            state.userUnderFocus.birthday = payload.birthday
            state.userUnderFocus.gender = payload.gender
            state.userUnderFocus.position = payload.position
            state.userUnderFocus.organization = payload.organization
            state.userUnderFocus.educationLevel = payload.educationLevel
            state.userUnderFocus.qualifyingCategory = payload.qualifyingCategory
            state.userUnderFocus.subjects = payload.subjects
            state.userUnderFocus.countryCode = payload.countryCode
            state.userUnderFocus.phone = payload.phone
            state.userUnderFocus.contactEmail = payload.contactEmail
            state.userUnderFocus.country = payload.country
            state.userUnderFocus.region = payload.region
            state.userUnderFocus.settlement = payload.settlement
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

                const userData = {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    email: email,
                    contactEmail: email,
                    password: password,
                    id: newUser.user.uid
                }

                const user = new User(userData)

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
            commit('setLoading', true)
            try { 
                const userData = await fb.database().ref('/users/' + payload).once('value')
                const user = userData.val()
                commit('setUserUnderFocus', user) 
            } catch {
                console.log('no such user')
            }
            commit('setLoading', false)
        },
        async editUserProfile ({commit}, payload) {

            const profileUpdate = new User ({
                firstName: payload.firstName,
                middleName: payload.middleName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
                birthday: payload.birthday,
                gender: payload.gender,
                position: payload.position,
                organization: payload.organization,
                educationLevel: payload.educationLevel,
                qualifyingCategory: payload.qualifyingCategory,
                subjects: payload.subjects,
                countryCode: payload.countryCode,
                phone: payload.phone,
                contactEmail: payload.contactEmail,
                country: payload.country,
                region: payload.region,
                settlement: payload.settlement,
            })
            
            if (payload.avatar) {

                let avatarSrc = null
                
                const fileData = await fb.storage().ref(`profiles/${payload.id}.png`).putString(payload.avatar, 'data_url')

                avatarSrc = await fileData.ref.getDownloadURL().then(function(downloadURL) {
                    return downloadURL
                })

                profileUpdate.avatarSrc = avatarSrc
            }

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