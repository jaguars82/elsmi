import * as fb from 'firebase'

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

                console.log(newUser.user.uid)

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

        }
    },
    getters: {
        userUnderFocus (state) {
            return state.userUnderFocus
        }
    }
}