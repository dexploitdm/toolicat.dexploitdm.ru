export default {
    state: {
        activeCat: [],
    },
    mutations: {
        SET_ACTIVE_CAT : (state,payload) => {
            state.activeCat = payload
        },

    },
    actions:{
        GET_ACTIVE_CAT : async (context,payload) => {
            context.commit('SET_ACTIVE_CAT',payload)
        },
    },
}
