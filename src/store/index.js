import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0,
            counter: 1
        }
    },
    mutations: {
        increment (state,value) {
            state.count = state.count + value;
        }
    },
    getters: {},
    actions:{}
})
export default store;