import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import fmjimmy from '@/pages/fmjimmy'
import totalbook from '@/pages/totalbook'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/fmjimmy',
            component:fmjimmy
        },
        {
            path:'/totalbook',
            name:'totalbook',
            component:totalbook
        },
        
    ]
})