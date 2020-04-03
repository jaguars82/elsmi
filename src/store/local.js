const languages = {
    en: {
        language: 'English',
        lng: 'en',
        chooseLanguage: 'Choose your language',
        close: 'Close',
        createAccount: 'create account',
        createAccountText: 'Create account',
        enterAccount: 'log in',
        email: 'Email',
        moreAboutTheAuthor: 'More about the author',
        open: 'open',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        requiredField: 'indicates required field',
        userFirstName: 'Legal first name',
        userMiddleName: 'Legal middle name',
        userLastName: 'Legal last name',
        viewProfile: 'View profile',
        viewAllPublications: 'All publications'
    },
    ru: {
        language: 'Русский',
        lng: 'ru',
        chooseLanguage: 'Выберите язык',
        close: 'Закрыть',
        createAccount: 'зарегистрироваться',
        createAccountText: 'Создание профиля',
        enterAccount: 'войти',
        email: 'Электронная почта',
        moreAboutTheAuthor: 'Подробнее об авторе',
        open: 'открыть',
        password: 'Пароль',
        passwordConfirm: 'Подтвердите пароль',
        requiredField: 'обязательное поле',
        userFirstName: 'Имя',
        userMiddleName: 'Отчество',
        userLastName: 'Фамилия',
        viewProfile: 'Посмотреть профиль',
        viewAllPublications: 'Все публикации автора'
    }
}

class Lang {
    constructor (language, lng) {
        this.language = language
        this.lng = lng
    }
}

const aviableLanguages = []
Object.keys(languages).forEach(key => {
    const lang = languages[key]
    aviableLanguages.push(
        new Lang(lang.language, lang.lng)
    )
})
    
export default {
    state: {
        aviableLanguages,
        local: languages.ru
    },
    mutations: {
        setLanguage (state, payload) {
            state.local = languages[payload]
        }
    },
    actions: {},
    getters: {
        local (state) {
            return state.local
        },
        aviableLanguages (state) {
            return state.aviableLanguages
        }
    },
}