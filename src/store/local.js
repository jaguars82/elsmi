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
                save: 'save',
                saveChanges: 'save chnges',
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
            },
            sharedData: {
                countries: ['Abkhazia', 'Australia', 'Austria', 'Azerbaijan', 'Albania', 'Algeria', 'American Samoa', 'Anguilla', 'Angola', 'Andorra', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Afghanistan', 'Bahamas', 'Bangladesh', 'Barbados', 'Bahrain', 'Belarus', 'Belize', 'Belgium', 'Benin', 'Bermuda', 'Bulgaria', 'Bolivia', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Burkina Faso', 'Burundi', 'Bhutan', 'Vanuatu', 'Hungary', 'Venezuela', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Vietnam', 'Gabon', 'Haiti', 'Guyana', 'Gambia', 'Ghana', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Germany', 'Guernsey', 'Gibraltar', 'Honduras', 'Hong Kong', 'Grenada', 'Greenland', 'Greece', 'Georgia', 'Guam', 'Denmark', 'Jersey', 'Djibouti', 'Dominica', 'Dominican Republic', 'Egypt', 'Zambia', 'Western Sahara', 'Zimbabwe', 'Israel', 'India', 'Indonesia', 'Jordan', 'Iraq', 'Iran, Islamic Republic of', 'Ireland', 'Iceland', 'Spain', 'Italy', 'Yemen', 'Cape Verde', 'Kazakhstan', 'Cambodia', 'Cameroon', 'Canada', 'Qatar', 'Kenya', 'Cyprus', 'Kyrgyzstan', 'Kiribati', 'China', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, Democratic Republic of the', 'Korea, Democratic People\'s republic of', 'Korea, Republic of', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Kuwait', 'Curaçao', 'Lao People\'s Democratic Republic', 'Latvia', 'Lesotho', 'Lebanon', 'Libyan Arab Jamahiriya', 'Liberia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Mauritius', 'Mauritania', 'Madagascar', 'Mayotte', 'Macao', 'Malawi', 'Malaysia', 'Mali', 'United States Minor Outlying Islands', 'Maldives', 'Malta', 'Morocco', 'Martinique', 'Marshall Islands', 'Mexico', 'Micronesia, Federated States of', 'Mozambique', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Burma', 'Namibia', 'Nauru', 'Nepal', 'Niger', 'Nigeria', 'Netherlands', 'Nicaragua', 'Niue', 'New Zealand', 'New Caledonia', 'Norway', 'United Arab Emirates', 'Oman', 'Bouvet Island', 'Isle of Man', 'Norfolk Island', 'Christmas Island', 'Heard Island and McDonald Islands', 'Cayman Islands', 'Cook Islands', 'Turks and Caicos Islands', 'Pakistan', 'Palau', 'Palestinian Territory, Occupied', 'Panama', 'Holy See (Vatican City State)', 'Papua New Guinea', 'Paraguay', 'Peru', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Macedonia, The Former Yugoslav Republic Of', 'Reunion', 'Russian Federation', 'Rwanda', 'Romania', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Swaziland', 'Saint Helena, Ascension And Tristan Da Cunha', 'Northern Mariana Islands', 'Saint Barthélemy', 'Saint Martin (French Part)', 'Senegal', 'Saint Vincent and the Grenadines', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Serbia', 'Seychelles', 'Singapore', 'Sint Maarten', 'Syrian Arab Republic', 'Slovakia', 'Slovenia', 'United Kingdom', 'United States', 'Solomon Islands', 'Somalia', 'Sudan', 'Suriname', 'Sierra Leone', 'Tajikistan', 'Thailand', 'Taiwan, Province of China', 'Tanzania, United Republic Of', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tuvalu', 'Tunisia', 'Turkmenistan', 'Turkey', 'Uganda', 'Uzbekistan', 'Ukraine', 'Wallis and Futuna', 'Uruguay', 'Faroe Islands', 'Fiji', 'Philippines', 'Finland', 'Falkland Islands (Malvinas)', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Croatia', 'Central African Republic', 'Chad', 'Montenegro', 'Czech Republic', 'Chile', 'Switzerland', 'Sweden', 'Svalbard and Jan Mayen', 'Sri Lanka', 'Ecuador', 'Equatorial Guinea', 'Åland Islands', 'El Salvador', 'Eritrea', 'Estonia', 'Ethiopia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Ossetia', 'South Sudan', 'Jamaica', 'Japan'],
                regions: [],
                subjects: ['Adaptive P.E.', 'Algebra', 'Ancient Civilizations', 'Ancient History', 'Animal Science', 'Anthropology', 'Art', 'Astronomy', 'Band', 'Basic Math', 'Biology', 'Botany', 'Business Technology', 'Chemistry', 'Choir', 'Computer Science or Lab', 'Consumer Math', 'CORE – core subjects class', 'Dance', 'Drama', 'Dramatics', 'Earth Science', 'Ecology', 'Economics', 'English', 'Environmental Science', 'Equine Science', 'Food Science', 'Foreign language', 'Forensic Science', 'French', 'Fundamental Math or Basic Math', 'Gardening', 'Genealogy', 'General Science', 'Geography', 'Geology', 'Geometry', 'Greek and Roman History', 'Handwork or handcrafts', 'Handwriting', 'Health', 'Home Economics', 'Honors Math in Algebra or Geometry', 'Instrumental Music', 'Instrumental Music – specific instrument', 'Intermediate Algebra', 'Introduction to Algebra', 'Language Arts', 'Latin', 'Leadership', 'Life Lab or gardening', 'Life Science', 'Marine Biology', 'Mathematics', 'Medieval and Renaissance', 'Medieval History', 'Metal Shop', 'Meteorology', 'Modern History', 'Movement or Eurythmy', 'Music', 'Occupational Therapy', 'Oceanography', 'Organic Chemistry', 'Philosophy', 'Physical Education (P.E.)', 'Physics', 'Political Science', 'Pre-algebra', 'Psychology', 'Reading', 'Remedial Math', 'Renaissance History', 'Resource Program', 'Science', 'Social Sciences', 'Social Studies', 'Sociology', 'Spanish', 'Special Education Day Class', 'Speech', 'Speech and Debate', 'Speech Therapy', 'Sports', 'Trigonometry', 'U.S. History and Government', 'Veterinary Science', 'Woodshop', 'World History', 'Zoology'],
                educationLevel: [],
                qualifyingCategory: [],
                position: []
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
                save: 'сохранить',
                saveChanges: 'сохранить изменения',
                settings: 'настройки'
            },
            profile: {
                profileSettings: 'Настройки профиля',
                tabs: [{tag: 'Обо мне', title: 'Основные данные профиля'}, {tag: 'Моя профессия', title: 'Сведения о профессиональной деятельности'}, {tag: 'Мои контакты', title: 'Контактные данные'}],
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
            },
            sharedData: {
                countries: ['Абхазия', 'Австралия', 'Австрия', 'Азербайджан', 'Албания', 'Алжир', 'Американское Самоа', 'Ангилья', 'Ангола', 'Андорра', 'Антарктида', 'Антигуа и Барбуда', 'Аргентина', 'Армения', 'Аруба', 'Афганистан', 'Багамы', 'Бангладеш', 'Барбадос', 'Бахрейн', 'Беларусь', 'Белиз', 'Бельгия', 'Бенин', 'Бермуды', 'Болгария', 'Боливия', 'Бонайре, Саба и Синт-Эстатиус', 'Босния и Герцеговина', 'Ботсвана', 'Бразилия', 'Британская территория в Индийском океане', 'Бруней-Даруссалам', 'Буркина-Фасо', 'Бурунди', 'Бутан', 'Вануату', 'Венгрия', 'Венесуэла Боливарианская Республика', 'Виргинские острова, Британские', 'Виргинские острова, США', 'Вьетнам', 'Габон', 'Гаити', 'Гайана', 'Гамбия', 'Гана', 'Гваделупа', 'Гватемала', 'Гвинея', 'Гвинея-Бисау', 'Германия', 'Гернси', 'Гибралтар', 'Гондурас', 'Гонконг', 'Гренада', 'Гренландия', 'Греция', 'Грузия', 'Гуам', 'Дания', 'Джерси', 'Джибути', 'Доминика', 'Доминиканская Республика', 'Египет', 'Замбия', 'Западная Сахара', 'Зимбабве', 'Израиль', 'Индия', 'Индонезия', 'Иордания', 'Ирак', 'Иран, Исламская Республика', 'Ирландия', 'Исландия', 'Испания', 'Италия', 'Йемен', 'Кабо-Верде', 'Казахстан', 'Камбоджа', 'Камерун', 'Канада', 'Катар', 'Кения', 'Кипр', 'Киргизия', 'Кирибати', 'Китай', 'Кокосовые (Килинг) острова', 'Колумбия', 'Коморы', 'Конго', 'Конго, Демократическая Республика', 'Корея, Народно-Демократическая Республика', 'Корея, Республика', 'Коста-Рика', 'Кот д\'Ивуар', 'Куба', 'Кувейт', 'Кюрасао', 'Лаос', 'Латвия', 'Лесото', 'Ливан', 'Ливийская Арабская Джамахирия', 'Либерия', 'Лихтенштейн', 'Литва', 'Люксембург', 'Маврикий', 'Мавритания', 'Мадагаскар', 'Майотта', 'Макао', 'Малави', 'Малайзия', 'Мали', 'Малые Тихоокеанские отдаленные острова Соединенных Штатов', 'Мальдивы', 'Мальта', 'Марокко', 'Мартиника', 'Маршалловы острова', 'Мексика', 'Микронезия, Федеративные Штаты', 'Мозамбик', 'Молдова, Республика', 'Монако', 'Монголия', 'Монтсеррат', 'Мьянма', 'Намибия', 'Науру', 'Непал', 'Нигер', 'Нигерия', 'Нидерланды', 'Никарагуа', 'Ниуэ', 'Новая Зеландия', 'Новая Каледония', 'Норвегия', 'Объединенные Арабские Эмираты', 'Оман', 'Остров Буве', 'Остров Мэн', 'Остров Норфолк', 'Остров Рождества', 'Остров Херд и острова Макдональд', 'Острова Кайман', 'Острова Кука', 'Острова Теркс и Кайкос', 'Пакистан', 'Палау', 'Палестинская территория, оккупированная', 'Панама', 'Папский Престол (Государство — город Ватикан)', 'Папуа-Новая Гвинея', 'Парагвай', 'Перу', 'Питкерн', 'Польша', 'Португалия', 'Пуэрто-Рико', 'Республика Македония', 'Реюньон', 'Россия', 'Руанда', 'Румыния', 'Самоа', 'Сан-Марино', 'Сан-Томе и Принсипи', 'Саудовская Аравия', 'Свазиленд', 'Святая Елена, Остров вознесения, Тристан-да-Кунья', 'Северные Марианские острова', 'Сен-Бартельми', 'Сен-Мартен', 'Сенегал', 'Сент-Винсент и Гренадины', 'Сент-Китс и Невис', 'Сент-Люсия', 'Сент-Пьер и Микелон', 'Сербия', 'Сейшелы', 'Сингапур', 'Синт-Мартен', 'Сирийская Арабская Республика', 'Словакия', 'Словения', 'Соединенное Королевство', 'Соединенные Штаты', 'Соломоновы острова', 'Сомали', 'Судан', 'Суринам', 'Сьерра-Леоне', 'Таджикистан', 'Таиланд', 'Тайвань (Китай)', 'Танзания, Объединенная Республика', 'Тимор-Лесте', 'Того', 'Токелау', 'Тонга', 'Тринидад и Тобаго', 'Тувалу', 'Тунис', 'Туркмения', 'Турция', 'Уганда', 'Узбекистан', 'Украина', 'Уоллис и Футуна', 'Уругвай', 'Фарерские острова', 'Фиджи', 'Филиппины', 'Финляндия', 'Фолклендские острова (Мальвинские)', 'Франция', 'Французская Гвиана', 'Французская Полинезия', 'Французские Южные территории', 'Хорватия', 'Центрально-Африканская Республика', 'Чад', 'Черногория', 'Чешская Республика', 'Чили', 'Швейцария', 'Швеция', 'Шпицберген и Ян Майен', 'Шри-Ланка', 'Эквадор', 'Экваториальная Гвинея', 'Эландские острова', 'Эль-Сальвадор', 'Эритрея', 'Эстония', 'Эфиопия', 'Южная Африка', 'Южная Джорджия и Южные Сандвичевы острова', 'Южная Осетия', 'Южный Судан', 'Ямайка', 'Япония'],
                regions: ['Алтайский край', 'Амурская область', 'Архангельская область', 'Астраханская область', 'Белгородская область', 'Брянская область', 'Владимирская область', 'Волгоградская область', 'Вологодская область', 'Воронежская область', 'Еврейская автономная область', 'Забайкальский край', 'Ивановская область', 'Иркутская область', 'Кабардино-Балкария', 'Калининградская область', 'Калужская область', 'Камчатский край', 'Карачаево-Черкесия', 'Кемеровская область', 'Кировская область', 'Костромская область', 'Краснодарский край', 'Красноярский край', 'Курганская область', 'Курская область', 'Ленинградская область', 'Липецкая область', 'Магаданская область', 'Москва', 'Московская область', 'Мурманская область', 'Ненецкий автономный округ', 'Нижегородская область', 'Новгородская область', 'Новосибирская область', 'Омская область', 'Оренбургская область', 'Орловская область', 'Пензенская область', 'Пермский край', 'Приморский край', 'Псковская область', 'Республика Адыгея', 'Республика Алтай', 'Республика Башкортостан', 'Республика Бурятия', 'Республика Дагестан', 'Республика Ингушетия', 'Республика Калмыкия', 'Республика Карелия', 'Республика Коми', 'Республика Крым', 'Республика Марий Эл', 'Республика Мордовия', 'Республика Саха (Якутия)', 'Республика Северная Осетия – Алания', 'Республика Татарстан', 'Республика Тыва', 'Республика Хакасия', 'Ростовская область', 'Рязанская область', 'Самарская область', 'Санкт-Петербург', 'Саратовская область', 'Сахалинская область', 'Свердловская область', 'Севастополь', 'Смоленская область', 'Ставропольский край', 'Тамбовская область', 'Тверская область', 'Томская область', 'Тульская область', 'Тюменская область', 'Удмуртская Республика', 'Ульяновская область', 'Хабаровский край', 'Ханты-Мансийский автономный округ – Югра', 'Челябинская область', 'Чеченская Республика', 'Чувашская Республика – Чувашия', 'Чукотский автономный округ', 'Ямало-Ненецкий автономный округ', 'Ярославская область'],
                subjects: ['алгебра', 'английский язык', 'астрономия', 'биология', 'география', 'геометрия', 'естествознание', 'изобразительное искусство (рисование)', 'индивидуальный проект', 'иностранный язык', 'информатика (ИКТ)', 'истоки', 'история', 'классный час', 'краеведение', 'литература', 'литературное чтение', 'математика', 'мировая художественная культура (МХК)', 'музыка', 'начальная военная подготовка', 'немецкий язык', 'общественно-полезный труд', 'обществознание', 'окружающий мир', 'основы безопасности жизнедеятельности', 'основы духовно-нравственных культур народов России', 'основы религиозных культур и светской этики', 'основы финансовой грамотности', 'основы экономики (экономика)', 'проектирование', 'психотренинг', 'риторика', 'родная литература', 'родной язык', 'русский язык', 'социология', 'статистика', 'технология (труд)', 'физика', 'физическая культура', 'философия', 'французский язык', 'химия', 'черчение', 'экология', 'экономика'],
                educationLevel: ['основное общее', 'среднее (полное) общее', 'среднее профессиональное', 'высшее', 'несколько высших'],
                qualifyingCategory: ['молодой специалист', 'соответствие занимаемой должности', 'первая квалификационная категория', 'высшая квалификационная категория'],
                position: ['воспитатель', 'директор', 'заместитель директора', 'заместитель директора по учебно-воспитательной работе', 'заместитель руководителя', 'заместитель руководителя по учебно-воспитательной работе', 'инструктор по труду', 'инструктор по физической культуре', 'инструктор-методист', 'концертмейстер', 'логопед', 'методист', 'музыкальный руководитель', 'педагог дополнительного образования', 'педагог-библиотекарь', 'педагог-организатор', 'педагог-психолог', 'преподаватель', 'преподаватель-организатор основ безопасности жизнедеятельности', 'руководитель', 'руководитель физического воспитания', 'социальный педагог', 'старший вожатый', 'старший воспитатель', 'старший инструктор-методист', 'старший мастер', 'старший методист', 'старший педагог дополнительного образования', 'старший тренер-преподаватель', 'тренер-преподаватель', 'тьютор', 'учитель', 'учитель алгебры и геометрии', 'учитель английского языка', 'учитель астрономии', 'учитель биологии', 'учитель географии', 'учитель естествознания', 'учитель изобразительного искусства', 'учитель иностранных языков', 'учитель информатики и ИКТ', 'учитель истории', 'учитель математики', 'учитель мировой художественной культуры (МХК)', 'учитель музыки', 'учитель начальной военной подготовки', 'учитель немецкого языка', 'учитель обществознания', 'учитель основ безопасности жизнедеятельности', 'учитель основ духовно-нравственных культур народов России', 'учитель основ религиозных культур и светской этики', 'учитель основ финансовой грамотности', 'учитель основ экономики', 'учитель родного языка', 'учитель родной литературы', 'учитель русского языка и литературы', 'учитель социологии', 'учитель статистики', 'учитель технологии (труда)', 'учитель физики', 'учитель физической культуры', 'учитель философии', 'учитель французского языка', 'учитель химии', 'учитель химии и биологии', 'учитель черчения', 'учитель экологии', 'учитель экономики', 'учитель-дефектолог', 'учитель-логопед']
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