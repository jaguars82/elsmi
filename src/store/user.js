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
    actions: {},
    getters: {
        userUnderFocus (state) {
            return state.userUnderFocus
        }
    }
}