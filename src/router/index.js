import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Article from '@/views/Article'
import UserProfile from '@/views/UserProfile'

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
        path: '/user/:id',
        name: 'user',
        component: UserProfile
    }
]

const router = new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    
})

export default router