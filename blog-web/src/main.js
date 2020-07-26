import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import 'element-ui/lib/theme-chalk/index.css'
import { Pagination, Button, Loading, Message, Select, Input, Option, Row, Col } from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.use(Pagination)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message;
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
