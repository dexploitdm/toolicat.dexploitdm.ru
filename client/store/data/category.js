import Axios from 'axios'
export default {
    state: {
        categories: [],
        category: []
    },
    mutations: {
        SET_CATEGORIES : (state,payload) => {
            state.categories = payload
        },
        SET_CATEGORY_ITEM : (state,payload) => {
            state.category = payload
        },
    },
    actions:{
        GET_CATEGORIES : async (context,payload) => {
            let { data } = await Axios.get(process.env.baseUrl + 'services/categories');
            context.commit('SET_CATEGORIES',data)
        },
        GET_CATEGORY_ITEM : async (context,payload) => {
            let { data } = await Axios.get(process.env.baseUrl + 'services/categories/' + payload);
            context.commit('SET_CATEGORY_ITEM',data)
        },
        // UPDATE_CATEGORY_ITEM : async (context,payload, dataCat) => {
        //     console.log(dataCat)
        //     //let { data } = await Axios.post(process.env.baseUrl + '/services/categories/' + payload);
        // },
        // CREATE_CATEGORY_ITEM : async (context,payload) => {
        //     let { data } = await Axios.get(process.env.baseUrl + '/services/categories/create' + payload);
        //     context.commit('SET_CATEGORY_ITEM',data)
        // },
    },
}
