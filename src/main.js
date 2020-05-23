import Vue from 'vue'
import App from './App.vue'
import Config from './conf'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//import './vee-validate'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Vue2Filters from 'vue2-filters'
import LangFlag from 'vue-lang-code-flags'
import RegForm from './components/User/Forms/Register.vue'
import LoginForm from './components/User/Forms/Login.vue'
import UserBadge from './components/User/UserBadge.vue'
import * as fb from 'firebase'

Vue.config.productionTip = false

Vue.use(Vue2Filters)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('reg-form', RegForm)
Vue.component('login-form', LoginForm)
Vue.component('lang-flag', LangFlag)
Vue.component('m-user-badge',  UserBadge)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    fb.initializeApp(Config.firebase)
    fb.analytics()
  } 
}).$mount('#app')
