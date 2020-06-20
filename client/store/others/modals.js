import Axios from 'axios'
export default {
    state: {
        modalShare: false,
        modalImage: false,
        modalLayout: false
    },
    mutations: {
        CHANGE_MODAL_SHARE : (state,payload) => {
            state.modalShare = !state.modalShare
            state.modalLayout = !state.modalLayout
        },
        CHANGE_MODAL_IMAGE : (state,payload) => {
            state.modalImage = !state.modalImage
            state.modalLayout = !state.modalLayout
        },

    },
    actions:{
        SET_MODAL_SHARE : async (context,payload) => {
            context.commit('CHANGE_MODAL_SHARE')
        },
        SET_MODAL_IMAIGE : async (context,payload) => {
            context.commit('CHANGE_MODAL_IMAGE')
        }
    },
}
