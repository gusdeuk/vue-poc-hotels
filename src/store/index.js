import { createStore } from 'vuex';

import catalogModule from './modules/catalog/index.js';

const store = createStore({
    modules: {
        catalogModule: catalogModule
    },

    /**
    TODO: Explore THIS STUFF play / organize  data root store + store modules
    **/
    state() {
        return {
            userId: 'testUserIdCarlo'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;
