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
        userUnderFocus: {
            id: '1',
            name: 'Татьяна',
            middleName: 'Сергеевна',
            surname: 'Иванова',
            avatarSrc: 'http://nashamama.com/uploads/images/default/image_562711121331583598150.jpg'
        }
    },
    mutations: {},
    actions: {
        async registerUser (context, {firstName, middleName, lastName, email, password}) {

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
        recoverPassword () {
               
            // Decrypt
            //const bytes = aes.decrypt(encPassword, userId)
            //const originalText = bytes.toString(encutf8)

            //console.log(originalText)
        }
    },
    getters: {
        userUnderFocus (state) {
            return state.userUnderFocus
        }
    }
}