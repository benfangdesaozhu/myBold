import http from './../util/http'
export function login (data) {
    return http.post('/api/login', data)
}
// 获取必应的图片当作背景色
export function getByImgAction (data) {
    return http.get('/api/login/byimg', data)
}
export function loginOut (data) {
    return http.post('/loginOut', data)
}
// 文章类目列表
export function getCategoryListAction (data) {
    return http.get('api/common/category', data)
}

// 新增文章
export function getPostsCreateAction (data) {
    return http.post('api/posts/create', data)
}

// 文章列表（某一篇或者是全部）
export function getPostsAction (data) {
    return http.post('api/posts', data)
}
// 文章详情页
export function getPostsDetailsAction (data) {
    return http.post('api/posts/details', data)
}
// 点赞文章
export function getPostsGiveGoodAction (data) {
    return http.post('api/posts/giveGood', data)
}

// comments 创建一条留言
export function getCommentsAction (data) {
    return http.post('api/comments', data)
}
// comments/getComments 获取当前文章的留言
export function getCommentsGetCommentsAction (data) {
    return http.post('api/comments/getComments', data)
}