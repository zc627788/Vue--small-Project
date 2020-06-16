// 入口文件
import Vue from "Vue"
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2配置路由模块
Vue.use(VueRouter)

import app from './App.vue'

// 导入MUI的样式

import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'




import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
//1.3导入自己的router.js路由模块
import router from './router.js'

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})