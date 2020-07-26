import blogModule from './blog'
/**
 * 登录模块管理
 * */ 
const login = () => import('./../view/login/login.vue');
const loginModule = [
    {
        path: '/login',
        name: 'login',
        component: login,
        children: [
            ...blogModule
        ]
    }
]
export default loginModule