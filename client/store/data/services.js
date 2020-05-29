import Axios from 'axios'
export default {
    state: {
        services: [],
        servicesPag: [],
        catServices: [],
        serviceItem: []
    },
    mutations: {
        SET_SERVICES : (state,payload) => {
            state.services = payload
        },
        SET_SERVICE_ITEM : (state,payload) => {
            state.serviceItem = payload
        },
        SET_SERVICES_PAG : (state,payload) => {
            state.servicesPag = payload
        },
        SET_STATE_CAT_SERVICES: (state, payload) => {
            state.catServices = payload
        }
    },
    actions:{
        GET_SERVICES : async (context,payload) => {
            let { data } = await Axios.get(process.env.baseUrl + 'services');
            context.commit('SET_SERVICES',data)
        },
        GET_SERVICE_ITEM : async (context,payload) => {
            let { data } = await Axios.get(process.env.baseUrl + 'services/' + payload);
            context.commit('SET_SERVICE_ITEM',data)
        },
        GET_SERVICES_PAG : async (context,payload) => {
            let { data } = await Axios.get(process.env.baseUrl + 'allServicesPag');
            context.commit('SET_SERVICES_PAG',data)
        },
        SET_CATEGORIES_SERVICES : async (context,payload) => {
            context.commit('SET_STATE_CAT_SERVICES',payload)
        }
    },
}
