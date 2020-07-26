/**
 * 博客内容模块管理
 * */ 
const blog = () => import('./../view/blog/index.vue');
const details1 = () => import('./../view/blog/details1.vue');
const blogModule = [
    {
        path: '/blog',
        name: 'blog',
        component: blog
    },
    {
        path: '/details1',
        name: 'details1',
        component: details1
    }
]
export default blogModule