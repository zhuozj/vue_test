import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import axios from 'axios'
// Vue.prototype.$axios = axios
import jquery from 'jquery'
Vue.prototype.$jquery = jquery

Vue.use(Element)

Vue.config.productionTip = false

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
    render: h => h(App),
    router
}).$mount('#app')


