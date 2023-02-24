import { createStore } from 'vuex';

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

const store = createStore({
    state() {
        return {
            isPlaying: false,
            timeSelected: 0,
            vibeSelected: {
                value: 'bird'
            },
            step: 0,
            choices: [{
                id: 1,
                name: '10 minutes',
                imgSrc: require("@/assets/images/button_10_minutes.png"),
                category: 'timer',
                value: 600,
            },
            {
                id: 2,
                name: '20 minutes',
                imgSrc: require("@/assets/images/button_20_minutes.png"),
                category: 'timer',
                value: 1200,
            },
            {
                id: 3,
                name: '30 minutes',
                imgSrc: require("@/assets/images/button_30_minutes.png"),
                category: 'timer',
                value: 1800,
            },
            {
                id: 4,
                name: 'In the space',
                imgSrc: require("@/assets/images/button_space.png"),
                category: 'vibe',
                value: 'space',
            },
            {
                id: 5,
                name: 'On The Beach',
                imgSrc: require("@/assets/images/button_beach.png"),
                category: 'vibe',
                value: 'beach',
            },
            {
                id: 6,
                name: 'Under The Rain',
                imgSrc: require("@/assets/images/button_rain.png"),
                category: 'vibe',
                value: 'rain',
            },
            ]
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,
});

export default store;