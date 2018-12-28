import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

import layoutt from './modules/layout'
import user from './modules/user'
import tags from './modules/tags'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        layoutt,
        user,
        tags
        //....       引入的模块
    },
    getters
})

export default store