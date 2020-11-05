import Vue from 'vue'
import Vuex from 'vuex'
import local from './local'
import articles from './articles'
import shared from './shared'
import user from './user'
import settings from './settings'

Vue.use(Vuex)

export default new Vuex.Store ({
    store: {},
    mutations: {},
    actions: {},
    modules: {
        local, articles, shared, user, settings
    }
})