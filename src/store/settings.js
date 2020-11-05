export default {
   state: {
      userPublicationsViewMode: 1
   },
   mutations: {
      SET_USER_PUBLICATIONS_VIEW_MODE (state, payload) {
         state.userPublicationsViewMode = payload
      }
   },
   actions: {
      setUserPublicationsViewMode ({commit}, payload) {
         commit('SET_USER_PUBLICATIONS_VIEW_MODE', payload)
      }
   },
   getters: {
      userPublicationsViewMode (state) {
         return state.userPublicationsViewMode
      }
   }
}
