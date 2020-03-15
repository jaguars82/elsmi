import Vue from 'vue'
import Vuex from 'vuex'
import local from './local'
import articles from './articles'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store ({
    store: {},
    mutations: {},
    actions: {},
    modules: {
        local, articles, user
    }
})