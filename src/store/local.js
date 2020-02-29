const languages = {
    en: {
       moreAboutTheAuthor: 'More about the author' 
    },
    ru: {
        moreAboutTheAuthor: 'Подробнее об авторе'
    }
} 
    
export default {
    state: {
        local: languages.en
    },
    mutations: {
        setLanguage (state, languages, payload) {
            state.local = languages[payload]
        }
    },
    actions: {},
    getters: {
        local (state) {
            return state.local
        }
    },
}