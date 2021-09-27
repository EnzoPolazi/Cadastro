import { createStore } from 'vuex'

const store = createStore({
    state: {
        authenticated: false
    },
    getters: {
        authenticatedGet (state) {
            return state.authenticated
        }
    },
    mutations: {
        SET_AUTH (state, auth) {
            state.authenticated = auth;
        }
    },
    actions: {
        setAuth (context, auth) {
            context.commit('SET_AUTH', auth);
        }
    },
    modules: {}
})

export default store;