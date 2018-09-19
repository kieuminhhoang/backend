import Vue from 'vue'
import VueRouter from 'vue-router'

import hbody from '../components/news/index/hBody.vue'
import bbody from '../components/news/index/bBody.vue'
import fbody from '../components/news/index/fBody.vue'


Vue.use(VueRouter)

const routes = [
    { 
        path: '/',components: {
	    	hBody: hbody,
	    	bBody: bbody,
	    	fBody: fbody,
	    }, 
    },
]

export default new VueRouter({
    mode: 'history',
    base: '/admin',
    routes
})
