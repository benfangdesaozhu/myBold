import nprogress from 'nprogress'
import axios from 'axios'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    nprogress.start()
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    nprogress.done()
    // 对响应数据做点什么
    return response;
  }, function (error) {
    nprogress.done()
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default axios