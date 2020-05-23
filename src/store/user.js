import * as fb from 'firebase'
import aes from 'crypto-js/aes'
//import encutf8 from 'crypto-js/enc-utf8'

class User {
    constructor (firstName, middleName, lastName, email, password, avatarSrc, id) {
        this.firstName = firstName,
        this.middleName = middleName,
        this.lastName = lastName,
        this.email = email,
        this.password = password,
        this.avatarSrc = avatarSrc,
        this.id = id
    }
}

export default {
    state: {
        userAuth: false,
        userActive: null,
        userUnderFocus: {
            id: '1',
            name: 'Татьяна',
            middleName: 'Сергеевна',
            surname: 'Иванова',
            avatarSrc: 'http://nashamama.com/uploads/images/default/image_562711121331583598150.jpg'
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
        setUserJustRegisteredFlag (state, payload) {
            state.userEventFlags.justRegistered = payload
        }
    },
    actions: {
        async userRegister (context, {firstName, middleName, lastName, email, password}) {

            try {
                //commit('')
                console.log(context)
                
                // Create user with email and pass.
                // [START createwithemail]
                const newUser = await fb.auth().createUserWithEmailAndPassword(email, password)

                const user = new User(firstName, middleName, lastName, email, password, '', newUser.user.uid)

                const encPassword = aes.encrypt(user.password, user.id).toString()
                
                user.password = encPassword

                await fb.database().ref(`users/${newUser.user.uid}`).update(user)
            
            } catch (error) {

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
            }
            // [END createwithemail]

        },
        async userLogin ({commit}, payload) {
            
            //try {            
                const auth = await fb.auth().signInWithEmailAndPassword(payload.email, payload.password)
                console.log(auth)
                commit('userLogin', auth.user.uid)
            /*} catch (error) {
                throw(error)
            }*/
        },
        recoverPassword () {
               
            // Decrypt
            //const bytes = aes.decrypt(encPassword, userId)
            //const originalText = bytes.toString(encutf8)

            //console.log(originalText)
        },
        setUserJustRegisteredFlag ({commit}, payload) {
            commit('setUserJustRegisteredFlag', payload)
        }
    },
    getters: {
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