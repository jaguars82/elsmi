export default {
    state: {
        loading: false,
        errMessage: null
        //loginDialog: false
    },
    mutations: {
        setLoading (state, payload) {
            state.loading = payload
        },
        setErrMessage (state, payload) {
            state.errMessage = payload
        },
        clearErrMessage (state) {
            state.errMessage = null
        }
        /*setLoginDialogStatus (state, payload) {
            state.loginDialog = payload
        }*/
    },
    actions: {
        setLoading ({commit}, payload) {
            commit('setLoading', payload)
        },
        setErrMessage ({commit}, payload) {
            commit('setErrMessage', payload)
        },
        clearErrMessage ({commit}) {
            commit('clearErrMessage')
        }
        /*setLoginDialogStatus ({commit}, payload) {
            commit('setLoginDialogStatus', payload)
        }*/
    },
    getters: {
        loading (state) {
            return state.loading
        },
        errMessage (state) {
            return state.errMessage
        }
        /*loginDialog (state) {
            return state.loginDialog
        }*/
    }
}