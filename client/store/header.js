export default {
    state: {
        authNav: false,
        drawer: false
    },
    // getters:{
    //     getAuthNav: state => { return state.authNav },
    // },
    // actions: {
    //     auth_trigger ({ commit }, payload) {
    //         commit('SET_AUTH_NAV', payload)
    //     },
    // },
    mutations: {
        SET_AUTH_NAV(state) {
            state.authNav = !state.authNav
        },
        SET_DRAWER(state) {
            state.drawer = !state.drawer
        }
    }
}
