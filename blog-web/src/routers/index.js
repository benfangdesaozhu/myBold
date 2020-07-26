import Vue from 'vue';
import Router from 'vue-router'
import nprogress from 'nprogress';
import loginModule from './login'
const login1 = () => import('./../view/login/login1.vue');
const write = () => import('./../view/blog/write.vue');
const Root = () => import('./../view/root.vue')
Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {
            redirect:'/blog',
            path: '/',
            component: Root,
            children: [
                ...loginModule
            ]
        },
        {
            path: '/login1',
            component: login1
        },
        {
            path: '/write',
            component: write
        }
    ]
})
router.beforeEach((to, from, next) => {
    console.log(to, from, nprogress)
    nprogress.start()
    next()
})
router.afterEach(() => {
    nprogress.done()
})
export default router