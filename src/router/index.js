import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Article from '@/views/Publications/Article'
import ArticlesFiltered from '@/views/Publications/ArticlesFiltered'
import PublishForm from '@/views/Publications/PublishForm'
import UserProfile from '@/views/UserProfile'
import userPublications from '@/views/userProfileElements/usersPublications.vue'
import WelcomeNewUser from '@/views/eventScreens/JustRegistered'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article
    },
    {
        path: '/collection/:filter/:id',
        name: 'collection',
        component: ArticlesFiltered,
        props: true
    },
    {
        path: '/publish',
        name: 'publish',
        component: PublishForm
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserProfile,
        children: [{
            path: 'publications',
            component: userPublications
        }]
    },
    {
        path: '/welcome',
        name: 'welcomeNewUser',
        component: WelcomeNewUser
    }
]

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    
})

export default router