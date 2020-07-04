import * as fb from 'firebase'

class Article {
    constructor (authorId, title, contentType, subtitle='', description='', category='', type='', subject='', html='', tags='', fileSrc='') {
        this.authorId = authorId
        this.title = title
        this.subtitle = subtitle
        this.description = description
        this.category = category
        this.type = type
        this.contentType = contentType
        this.subject = subject
        this.html = html
        this.fileSrc = fileSrc
        this.tags = tags
    }
}


export default {
    state: {
        articles: [
            {
                id: '1',
                subject: 'Русский язык',
                type: 'Методическая разработка',
                title: 'Заголовок 1',
                description: 'Ясность нашей позиции очевидна: высокотехнологичная концепция общественного уклада однозначно определяет каждого участника как способного принимать собственные решения касаемо распределения внутренних резервов и ресурсов! Лишь предприниматели в сети интернет неоднозначны и будут функционально разнесены на независимые элементы. Сложно сказать, почему реплицированные с зарубежных источников, современные исследования формируют глобальную экономическую сеть и при этом - объединены в целые кластеры себе подобных!',
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
                    avatarSrc: 'http://nashamama.com/uploads/images/default/image_562711121331583598150.jpg'
                }
            },
            {
                id: '2',
                subject: 'Литература',
                type: 'Личный педагогический опыт',
                title: 'Заголовок 2',
                description: 'Предварительные выводы неутешительны: синтетическое тестирование способствует подготовке и реализации направлений прогрессивного развития. В своём стремлении повысить качество жизни, они забывают, что постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения экспериментов, поражающих по своей масштабности и грандиозности.',
                fullText: '',
                date: '24/02/2020',
                appearance: {
                    showMainImg: false,
                    mainImgSrc: '',
                    flex: 6
                },
                author: {
                    id: '1',
                    name: 'Татьяна',
                    middleName: 'Сергеевна',
                    surname: 'Иванова',
                    avatarSrc: 'http://nashamama.com/uploads/images/default/image_562711121331583598150.jpg'
                }
            },
        ],
        articleOpened: {
            id: '1',
            subject: 'Русский язык',
            type: 'Методическая разработка',
            title: 'Заголовок 1',
            description: 'Ясность нашей позиции очевидна: высокотехнологичная концепция общественного уклада однозначно определяет каждого участника как способного принимать собственные решения касаемо распределения внутренних резервов и ресурсов! Лишь предприниматели в сети интернет неоднозначны и будут функционально разнесены на независимые элементы. Сложно сказать, почему реплицированные с зарубежных источников, современные исследования формируют глобальную экономическую сеть и при этом - объединены в целые кластеры себе подобных!',
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
                avatarSrc: 'http://nashamama.com/uploads/images/default/image_562711121331583598150.jpg'
            }
        }
    },
    mutatins: {

    },
    actions: {
        async articleCreate (context, payload) {
            const article = new Article(
                payload.authorId,
                payload.title,
                payload.contentType,
                payload.subtitle,
                payload.description,
                payload.category,
                payload.type,
                payload.subject,
                payload.html,
                payload.tags,
            )

            const newArticle = await fb.database().ref('articles').push(article)

            let fileSrc = ''
            let fileInfo = ''

            if(payload.contentType === 'file' && payload.mainFile) {
                fileInfo = payload.mainFileInfo
                const fileData = await fb.storage().ref(`articles/${payload.mainFile.name}`).put(payload.mainFile)
                fileSrc = await fileData.ref.getDownloadURL().then(function(downloadURL) {
                    return downloadURL
                })
            }

            let imgSrc = ''
            let imgInfo = ''

            if(payload.mainImg) {
                imgInfo = payload.mainImgInfo
                const imgData = await fb.storage().ref(`articles/${payload.mainImg.name}`).put(payload.mainImg)
                imgSrc = await imgData.ref.getDownloadURL().then(function(downloadURL) {
                    return downloadURL
                })
            }

            //let appendixFiles = []

            if(payload.appndxFiles) {
                payload.appndxFiles.forEach(async (element, i) => {
                    const fileData = await fb.storage().ref(`articles/${element.name}`).put(element)
                    const fileSrc = await fileData.ref.getDownloadURL().then(function(downloadURL) {
                        return downloadURL
                    })
                    const appndxInfo = {url: fileSrc, size: payload.appndxFilesInfo[i].size, extention: payload.appndxFilesInfo[i].extention, type: payload.appndxFilesInfo[i].type}
                    await fb.database().ref('articles').child(`${newArticle.key}/appendixFiles/${i}`).update(appndxInfo)
                })
            }

            //console.log(fileSrc)
    
            await fb.database().ref('articles').child(newArticle.key).update({ fileSrc, fileInfo, imgSrc, imgInfo})
    
            console.log(context)
            //console.log(article)
            //console.log(newArticle)
        }

    },
    getters: {
        articles (state) {
            return state.articles
        },
        articleOpened (state) {
            return state.articleOpened
        }
    }
}