const languages = {
    en: {
        language: 'English',
        lng: 'en',
        chooseLanguage: 'Choose your language',
        createAccount: 'create account',
        enterAccount: 'log in',
        moreAboutTheAuthor: 'More about the author',
        open: 'open',
        viewProfile: 'View profile',
        viewAllPublications: 'All publications'
    },
    ru: {
        language: 'Русский',
        lng: 'ru',
        chooseLanguage: 'Выберите язык',
        createAccount: 'зарегистрироваться',
        enterAccount: 'войти',
        moreAboutTheAuthor: 'Подробнее об авторе',
        open: 'открыть',
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