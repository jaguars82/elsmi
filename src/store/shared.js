export default {
    state: {
        loading: false,
        errMessage: null
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
    },
    getters: {
        loading (state) {
            return state.loading
        },
        errMessage (state) {
            return state.errMessage
        }
    }
}