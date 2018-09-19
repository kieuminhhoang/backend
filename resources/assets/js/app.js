require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios')

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './routes'
import store from './store'

const app = new Vue({
    router,
    store
}).$mount('#app')