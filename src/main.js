import Vue from 'vue'
import App from './App.vue'
import Config from './conf'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import DialogConfirm from './components/dialogs/confirm.vue'
import Vue2Filters from 'vue2-filters'
import LangFlag from 'vue-lang-code-flags'
import RegForm from './components/User/Forms/Register.vue'
import LoginForm from './components/User/Forms/Login.vue'
import LoggedInForm from './components/User/Forms/LoggedIn.vue'
import ArticlePreview from './components/Publications/ArticlePreview.vue'
import ArticlePreviewMin from './components/Publications/ArticlePreviewMin.vue'
import ArticlePreviewList from './components/Publications/ArticlePreviewList.vue'
import UserBadge from './components/User/UserBadge.vue'
import errorInfoScreen from './components/eventScreens/onError'
import loadingIndicator from './components/eventScreens/onLoading'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify' // import WYSIWYG-editor plugin
import 'tiptap-vuetify/dist/main.css'
import 'vuetify/dist/vuetify.min.css'
import VueFileAgent from 'vue-file-agent' // "Vue File Agent" drag-and-drop file uploader component
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css' // styles for "Vue File Agent"
import * as fb from 'firebase'

Vue.config.productionTip = false

Vue.use(Vue2Filters)

Vue.use(TiptapVuetifyPlugin, {
  vuetify,
  iconsGroup: 'mdi'
})

Vue.use(VueFileAgent, VueFileAgentStyles)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('reg-form', RegForm)
Vue.component('m-dialog-confirm', DialogConfirm)
Vue.component('login-form', LoginForm)
Vue.component('logged-in-form', LoggedInForm)
Vue.component('lang-flag', LangFlag)
Vue.component('m-user-badge',  UserBadge)
Vue.component('m-article-preview',  ArticlePreview)
Vue.component('m-article-preview-min',  ArticlePreviewMin)
Vue.component('m-article-preview-list',  ArticlePreviewList)
Vue.component('error-info', errorInfoScreen)
Vue.component('m-loading', loadingIndicator)


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    
    fb.initializeApp(Config.firebase)
    fb.analytics()
    
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        store.commit('userLogin', user.uid) // User is signed in
        //console.log(user)
      } else {
        store.commit('userLogOut') // No user is signed in
      }
    });
    
  } 
}).$mount('#app')
