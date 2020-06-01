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
        validation: {
            required: 'This field is required',
            alphabit: 'Characters only allowed',
            email: 'This field must be a valid email',
            passconfirmed: 'Passwords should match',
            passlength: 'Password must be at least 6 characters',
            passwRegex: 'You should use only characters, digits, dashes and underscores'
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
        validation: {
            required: 'Это обязательное поле',
            alphabit: 'Можно вводить только буквы',
            email: 'Введите корректный адрес электронной почты',
            passconfirmed: 'Пароли должны совпадать',
            passlength: 'Пароль должен содержать не менее 6 символов',
            passwRegex: 'Можно использовать символы латинницы, цифры, дефис и нижнее подчёркивание'
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