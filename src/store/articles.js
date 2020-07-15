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

class ArticleView {
    constructor (id, contentType, title, subtitle = null, subject = null, type = null, description = null, fullText = null, mainImg = null, authorId = null, authorName = null, authorMiddleName = null, authorLastName = null, authorAvatar = null) {
        this.id = id
        this.contentType = contentType
        this.subject = subject
        this.type = type
        this.title = title
        this.subtitle = subtitle
        this.description = description
        this.fullText = fullText
        this.date = new Date()
        this.appearance = {
            showMainImg: true,
            mainImgSrc: mainImg,
            flex: 6
        },
        this.author = {
            id: authorId,
            name: authorName,
            middleName: authorMiddleName,
            surname: authorLastName,
            avatarSrc: authorAvatar
        }
    }
}

class Author {
    constructor (firstName, middleName, lastName, avatarSrc) {
        this.info = {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            avatarSrc: avatarSrc
        }
    }
}


export default {
    state: {
        articles: [
            /*{
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
            },*/
        ],
        currAuthors: null,
        articleOpened: {}
    },
    mutations: {
        fetchArticles (state, payload) {
            state.articles = payload
        },
        setOpenedArticle (state, payload) {
            state.articleOpened = payload
        },
        setCurrAuthors (state, payload) {
            state.currAuthors = payload
        },
        fake () {
        }
    },
    actions: {
        async articleCreate ({commit}, payload) {
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
    
            commit('fake')

        },
        async fetchArticles ({commit}, payload) {

          const fetchedArticles = []
          const authors =  []
          let articlesData = null

          
          switch (payload.filterBy) {

            case 'user':
                articlesData = await fb.database().ref('articles').orderByChild('authorId').equalTo(payload.id).once('value')
                break
            default:
                articlesData = await fb.database().ref('articles').once('value')
          }

          const articles = articlesData.val()

          Object.keys(articles).forEach(async key => {

            const article = articles[key]

            //if(typeof authors[article.authorId] == 'undefined') {
            //if(!authors.includes(article.authorId)) {

                //authors.push(article.authorId)
                
                const authorData = await fb.database().ref(`users/${article.authorId}`).once('value')
                const author = authorData.val()

                authors[article.authorId] = new Author(author.firstName, author.middleName, author.lastName, author.avatarSrc)
                //console.log(typeof authors[article.authorId])

            //}

            fetchedArticles.push (
                new ArticleView(
                    key,
                    article.contentType,
                    article.title,
                    article.subtitle,
                    article.subject,
                    article.type,
                    article.description,
                    article.html,
                    article.imgSrc,
                    article.authorId,
                    authors[article.authorId].info.firstName,
                    authors[article.authorId].info.middleName,
                    authors[article.authorId].info.lastName,
                    authors[article.authorId].info.avatarSrc
                )
            )
        })

        //const authAmount = authors.length

        //const authorsO = {}

        /*authors.forEach(async authId => {

            const authorData = await fb.database().ref(`users/${authId}`).once('value')
            .then((response) => {
                const author = response.val()
                authors.push({
                    id: authId,
                    firstName: author.firstName,
                    middleName: author.middleName,
                    lastName: author.lastName,
                    avatarSrc: author.avatarSrc
                })
            })*/
            /*const author = authorData.val()
            authors.push({
                id: authId,
                firstName: author.firstName,
                middleName: author.middleName,
                lastName: author.lastName,
                avatarSrc: author.avatarSrc
            })*/
            //console.log(typeof authId)
            //authorsO[authId] = new Author(author.firstName, author.middleName, author.lastName, author.avatarSrc)
            /*authorsO[authId.toString()] = {
                firstName: author.firstName,
                middleName: author.middleName, 
                lastName: author.lastName, 
                avatarSrc: author.avatarSrc
            }*/

            /*Object.defineProperty( authorsO, [authId], {
                value: {
                    firstName: author.firstName,
                    middleName: author.middleName, 
                    lastName: author.lastName, 
                    avatarSrc: author.avatarSrc
                },  // устанавливаем значение свойства 
                enumerable: true,  // устанавливаем, что свойство перечислимо 
            })*/

        //})

        //authors.splice(0, authAmount)

        //console.log(typeof(authors))
        

        /*Object.keys(authorsO).forEach(key => {
            console.log(key)
        })*/
        
        /*for (let author in authors) {
            try {console.log(author)
            console.log('888888')
            } catch(err) {
                console.log(err)
            }
        }*/
        
        /*authors.forEach(author => {
            console.log(author)
            console.log('author----')
        })*/

        /*fetchedArticles.forEach(article => {

            //const authId = article.author.id

            //article.author.name = authors[authId].info.firstName
            //console.log(article.author.id)
            //console.log(authors)
            //console.log(authors['TV8j1JaNlzVVkhrcyChNFbtUbxm1'].info)
        })*/

        /*fetchedArticles.forEach(article => {
            console.log(article.author.id)
            console.log(authors.find(author => author.id == article.author.id))            
        })    */
                
       
          commit('fetchArticles', fetchedArticles)
          //commit('setCurrAuthors', authors)
          //console.log(fetchedArticles)
          //console.log(authors)
          //console.log(JSON.stringify(authorsO))
          //console.log({}.propertyIsEnumerable.call(authorsO, 'TV8j1JaNlzVVkhrcyChNFbtUbxm1') )
          //console.log(Object.keys(authorsO))
          
        },
        async setOpenedArticle ({commit}, payload) {

            const articleData = await fb.database().ref('articles').child(payload).once('value')
            const article = articleData.val()

            const authorData = await fb.database().ref(`users/${article.authorId}`).once('value')
            const author = authorData.val()

            const authorInfo = new Author(author.firstName, author.middleName, author.lastName, author.avatarSrc)

            const structuredArticle = new ArticleView (
                payload,
                article.contentType,
                article.title,
                article.subtitle,
                article.subject,
                article.type,
                article.description,
                article.html,
                article.imgSrc,
                article.authorId,
                authorInfo.info.firstName,
                authorInfo.info.middleName,
                authorInfo.info.lastName,
                authorInfo.info.avatarSrc
            )

            commit('setOpenedArticle', structuredArticle)
        }
    },
    getters: {
        articles (state) {
            return state.articles
        },
        currAuthors (state) {
            return state.currAuthors
        },
        articleOpened (state) {
            return state.articleOpened
        }
    }
}