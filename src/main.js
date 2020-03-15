import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vue2Filters from 'vue2-filters'
import LangFlag from 'vue-lang-code-flags'
import UserBadge from './components/User/UserBadge.vue'

Vue.config.productionTip = false

Vue.use(Vue2Filters)

Vue.component('lang-flag', LangFlag)
Vue.component('m-user-badge',  UserBadge)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
