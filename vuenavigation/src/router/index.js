import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        //Download page
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})