const languages = {
    en: {
        language: 'English',
        lng: 'en',
        chooseLanguage: 'Choose your language',
        close: 'Close',
        createAccount: 'create account',
        createAccountText: 'Create account',
        enterAccount: 'Log in',
        enterAccount2: 'Enter your account',
        email: 'Email',
        goToMainPage: 'Main page',
        moreAboutTheAuthor: 'More about the author',
        open: 'open',
        password: 'Password',
        passwordConfirm: 'Confirm password',
        requiredField: 'indicates required field',
        rulesAgree: 'I agree to the Terms and give my consent to the processing of my personal data',
        userFirstName: 'Legal first name',
        userMiddleName: 'Legal middle name',
        userLastName: 'Legal last name',
        viewProfile: 'View profile',
        viewAllPublications: 'All publications',
        forms: {
            buttons: {
                ok: 'OK',
                cancel: 'cancel',
                reset: 'сбросить',
                continue: 'next',
                back: 'back',
                publishMaterial: 'publish',
                settings: 'settings'
            },
            publicationForm: {
                formTitle: 'Publishing new material',
                stepNames: ['Information about the material', 'Main part', 'Design and appendices'],
                stepTitles: ['STEP 1. Enter basic information and a description of the published material', 'STEP 2. Place the main material of the publication here', 'STEP 3. Design and appendices that complement the main material'],
                categorySelect: 'Select a category',
                categorySelectItems: ['pre-school education', 'primary school', 'basic General education', 'secondary vocational education', 'higher professional education', 'research, scientific and project work', 'exchange of pedagogical experience'],
                typeSelect: 'Specify the publication type',
                typeSelectItems: ['article', 'methodological development', 'teaching material', 'lesson summary', 'pedagogical planning', 'technological map', 'presentation', 'elective', 'research', 'project', 'scientific material'],
                subjectSelect: 'Subject, academic discipline (you can specify several)',
                subjectSelectItems: ['Adaptive P.E.', 'Algebra', 'Ancient Civilizations', 'Ancient History', 'Animal Science', 'Anthropology', 'Art', 'Astronomy', 'Band', 'Basic Math', 'Biology', 'Botany', 'Business Technology', 'Chemistry', 'Choir', 'Computer Science or Lab', 'Consumer Math', 'CORE – core subjects class', 'Dance', 'Drama', 'Dramatics', 'Earth Science', 'Ecology', 'Economics', 'English', 'Environmental Science', 'Equine Science', 'Food Science', 'Foreign language', 'Forensic Science', 'French', 'Fundamental Math or Basic Math', 'Gardening', 'Genealogy', 'General Science', 'Geography', 'Geology', 'Geometry', 'Greek and Roman History', 'Handwork or handcrafts', 'Handwriting', 'Health', 'Home Economics', 'Honors Math in Algebra or Geometry', 'Instrumental Music', 'Instrumental Music – specific instrument', 'Intermediate Algebra', 'Introduction to Algebra', 'Language Arts', 'Latin', 'Leadership', 'Life Lab or gardening', 'Life Science', 'Marine Biology', 'Mathematics', 'Medieval and Renaissance', 'Medieval History', 'Metal Shop', 'Meteorology', 'Modern History', 'Movement or Eurythmy', 'Music', 'Occupational Therapy', 'Oceanography', 'Organic Chemistry', 'Philosophy', 'Physical Education (P.E.)', 'Physics', 'Political Science', 'Pre-algebra', 'Psychology', 'Reading', 'Remedial Math', 'Renaissance History', 'Resource Program', 'Science', 'Social Sciences', 'Social Studies', 'Sociology', 'Spanish', 'Special Education Day Class', 'Speech', 'Speech and Debate', 'Speech Therapy', 'Sports', 'Trigonometry', 'U.S. History and Government', 'Veterinary Science', 'Woodshop', 'World History', 'Zoology'],
                subjectSelectHint: 'Items can be selected from a list and entered using the keyboard. After entering from the keyboard, press "Tab" or "Enter" to add a value to the field',
                title: 'Header (the name of the material)',
                subtitle: 'Subtitle',
                description: 'Description, explanatory text',
                contentTypeSelect: 'Choose a way to place the material',
                contentTypeItems: ['I want to upload a ready-made document file', 'I want to format the material using a text editor'],
                mainFileText: 'Click to upload or drag-n-drop the document file here',
                mainFileErrText: ['Invalid file type. Only documents allowed', 'The File is too large. Its size must not exceed 5 MB'],
                wysiwygPlaceholder: 'Place the published material here',
                imgChkLabel: 'Upload the main image ("cover") for the publication design',
                mainImgText: 'Click to upload or drag-n-drop the file here',
                mainImgErrText: ['Invalid file type. Only images allowed', 'The File is too large. Its size must not exceed 3 MB'],
                appndxChkLabel: 'Upload appendices (up to 5 files no more than 1Mb each)',
                appndxText: 'Click to upload or drag-n-drop files here',
                appndxErrText: ['Invalid file type. Only documents, images and archives allowed', 'The File is too large. Its size must not exceed 1 MB'],
                tagsLabel: 'Tags that describe the published material',
                tagsHint: 'After entering each tag, press "Tab" or "Enter" to add it to the list'
            }
        },
        validation: {
            required: 'This field is required',
            alphabit: 'Characters only allowed',
            email: 'This field must be a valid email',
            passconfirmed: 'Passwords should match',
            passlength: 'Password must be at least 6 characters',
            passwRegex: 'You should use only characters, digits, dashes and underscores',
            phone: 'Enter valid phone number'
        },
        errors: {
            error: 'error',
            errorCodes: {
                invalidEmail: 'The email address is not valid',
                userDisabled: 'The user corresponding to the given email has been disabled',
                userNotFound: 'There is no user corresponding to the given email',
                wrongPassword: 'The password is invalid for the given email',
                emailAlreadyInUse: 'Account with the given email address already exists',
                weakPassword: 'The password is not strong enough',
                operationNotAllowed: 'Operation not allowed',
                unknown: 'Unknown error'
            },
            errorInfoScreensMessages: {
                noUserProfile: {
                    title: 'Can\'t get User\'s Profile data',
                    subtitle: 'Probably User doesn\'t exist'
                }
            }
        }
    },
    ru: {
        language: 'Русский',
        lng: 'ru',
        chooseLanguage: 'Выберите язык',
        close: 'Закрыть',
        createAccount: 'зарегистрироваться',
        createAccountText: 'Создание профиля',
        enterAccount: 'Войти',
        enterAccount2: 'Войти в аккаунт',
        email: 'Электронная почта',
        goToMainPage: 'На главную страницу',
        moreAboutTheAuthor: 'Подробнее об авторе',
        open: 'открыть',
        password: 'Пароль',
        passwordConfirm: 'Подтвердите пароль',
        requiredField: 'обязательное поле',
        rulesAgree: 'Принимаю правила сайта и даю согласие на обработку персональных данных',
        userFirstName: 'Имя',
        userMiddleName: 'Отчество',
        userLastName: 'Фамилия',
        viewProfile: 'Посмотреть профиль',
        viewAllPublications: 'Все публикации автора',
        forms: {
            buttons: {
                ok: 'ок',
                cancel: 'отмена',
                reset: 'сбросить',
                continue: 'далее',
                back: 'назад',
                publishMaterial: 'опубликовать материал',
                settings: 'настройки'
            },
            profile: {
                profileSettings: 'Настройки профиля',
                tabs: ['Основные сведения', 'Место работы', 'Образование', 'Контакты'],
                birthday: 'Дата рождения',
                countryCode: 'Код страны',
                phone: 'Телефон',
            },
            publicationForm: {
                formTitle: 'Публикация нового материала',
                stepNames: ['Информация о материале', 'Основная часть', 'Оформление и приложения'],
                stepTitles: ['ШАГ 1. Укажите базовую информацию и описание публикуемого материала', 'ШАГ 2. Разместите здесь основной материал публикации', 'ШАГ 3. Оформление и приложения, дополняющие основной материал'],
                categorySelect: 'Выберите категорию',
                categorySelectItems: ['дошкольное образование', 'начальная школа', 'основное общее образование','среднее профессиональное образование', 'высшее профессиональное образование', 'исследовательские, научные и проектные работы', 'обмен педагогическим опытом'],
                typeSelect: 'Укажите тип публикации',
                typeSelectItems: ['статья', 'методическая разработка', 'учебно-методический материал', 'конспект занятия', 'педагогическое планирование', 'технологическая карта', 'презентация', 'факультатив', 'исследование', 'проект', 'научный материал'],
                subjectSelect: 'Предмет, учебная дисциплина (можно указать несколько)',
                subjectSelectItems: ['алгебра', 'английский язык', 'астрономия', 'биология', 'география', 'геометрия', 'естествознание', 'изобразительное искусство (рисование)', 'индивидуальный проект', 'иностранный язык', 'информатика (ИКТ)', 'истоки', 'история', 'классный час', 'краеведение', 'литература', 'литературное чтение', 'математика', 'мировая художественная культура (МХК)', 'музыка', 'начальная военная подготовка', 'немецкий язык', 'общественно-полезный труд', 'обществознание', 'окружающий мир', 'основы безопасности жизнедеятельности', 'основы духовно-нравственных культур народов России', 'основы религиозных культур и светской этики', 'основы финансовой грамотности', 'основы экономики (экономика)', 'проектирование', 'психотренинг', 'риторика', 'родная литература', 'родной язык', 'русский язык', 'социология', 'статистика', 'технология (труд)', 'физика', 'физическая культура', 'философия', 'французский язык', 'химия', 'черчение', 'экология', 'экономика'],
                subjectSelectHint: 'Предметы можно выбирать из списка и вводить с клавиатуры. После ввода с клавиатуры нажимайте "Tab" или "Enter", чтобы добавить значение в поле',
                title: 'Название материала (заголовок)',
                subtitle: 'Подзаголовок',
                description: 'Описание, пояснительный текст',
                contentTypeSelect: 'Выберите способ размещения материала',
                contentTypeItems: ['Я хочу загрузить готовый файл документа', 'Я хочу оформить материал с помощью текстового редактора'],
                mainFileText: 'Нажмите для загрузки или перетащите файл документа сюда',
                mainFileErrText: ['Неверный тип файла. Можно загружать только документы', 'Файл слишком большой. Размер файла не должен превышать 5Мб'],
                wysiwygPlaceholder: 'Разместите здесь публикуемый материал',
                imgChkLabel: 'Загрузить главное изображение ("обложку") для оформления материала',
                mainImgText: 'Нажмите для загрузки или перетащите файл сюда',
                mainImgErrText: ['Неверный тип файла. Можно загружать только изображения', 'Файл слишком большой. Размер файла не должен превышать 3Мб'],
                appndxChkLabel: 'Загрузить приложения (до 5 файлов не более 1Мб каждый)',
                appndxText: 'Нажмите для загрузки или перетащите файлы сюда',
                appndxErrText: ['Неверный тип файла. Можно загружать только документы и архивы', 'Файл слишком большой. Размер файла не должен превышать 1Мб'],
                tagsLabel: 'Теги, описывающие публикуемый материал',
                tagsHint: 'После ввода каждого тега нажимайте "Tab" или "Enter", чтобы добавить его в список'
            }
        },
        validation: {
            required: 'Это обязательное поле',
            alphabit: 'Можно вводить только буквы',
            email: 'Введите корректный адрес электронной почты',
            passconfirmed: 'Пароли должны совпадать',
            passlength: 'Пароль должен содержать не менее 6 символов',
            passwRegex: 'Можно использовать символы латинницы, цифры, дефис и нижнее подчёркивание',
            phone: 'Введите корректный номер телефона'
        },
        errors: {
            error: 'ошибка',
            errorCodes: {
                invalidEmail: 'Некорректный адрес электронной почты',
                userDisabled: 'Пользователь заблокирован',
                userNotFound: 'Пользователь не найден',
                wrongPassword: 'Неверный пароль',
                emailAlreadyInUse: 'Пользователь с этим адресом электронной почты уже существует',
                weakPassword: 'Слишком простой (небезопасный) пароль',
                operationNotAllowed: 'В действии отказано',
                unknown: 'Неизвестная ошибка'
            },
            errorInfoScreensMessages: {
                noUserProfile: {
                    title: 'Не удаётся получить данные профиля',
                    subtitle: 'Возможно, такого пользователя не существует'
                }
            }
        }
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