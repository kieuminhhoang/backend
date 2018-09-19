import Vue from 'vue'
import Vuex from 'vuex'

import NewsIndex from './modules/News'
import NewsSingle from './modules/News/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        NewsIndex,
        NewsSingle,
    },
    strict: debug,
})