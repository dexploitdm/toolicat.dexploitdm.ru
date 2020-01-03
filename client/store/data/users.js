import Axios from 'axios'
export default {
    state: {
        users: []
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
        SET_USER : (state,payload) => {
            state.users = payload
        },
    },
    actions:{
        GET_USER : async (context,payload) => {
            let { data } = await Axios.get(process.env.baseUrl + 'user/all')
            context.commit('SET_USER',data)
        },
    },
}
