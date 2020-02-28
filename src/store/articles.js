export default {
    state: {
        articles: [
            {
                id: '1',
                subject: 'Русский язык',
                type: 'Методическая разработка',
                title: 'Заголовок 1',
                description: '',
                fullText: '',
                date: '22/02/2020',
                appearance: {
                    showMainImg: true,
                    mainImgSrc: 'https://sun9-54.userapi.com/c846221/v846221327/ba92a/WvoVAwRNchE.jpg',
                    flex: 6
                },
                author: {
                    id: '1',
                    name: 'Татьяна',
                    middleName: 'Сергеевна',
                    surname: 'Иванова',
                }
            }
        ]
    },
    mutatins: {

    },
    actions: {
        
    },
    getters: {
        articles (state) {
            return state.articles
        }
    }
}