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





import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'http://api.cms.liulongbin.top/'
//全局设置post时表单提交的格式
Vue.http.options.emulateJSON = true


import {
    Header,
    Swipe,
    SwipeItem,
    Button,
    Lazyload

} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload);

//1.3导入自己的router.js路由模块
import router from './router.js'

// 缩略图
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)



// 缩略图------end


//{{ date | dateFormat('yyyy-mm-dd') }} 不填默认 yyyy-mm-dd hh-mm-ss
// 过滤器， 进行时间的格式化
Vue.filter('dateFormat', function (dateStr, pattern = '') {
    let dt = new Date(dateStr)
    let y = dt.getFullYear()
    let m = (dt.getMonth() + 1).toString().padStart(2, '0')
    let d = dt.getDate().toString().padStart(2, '0')
    pattern.toLowerCase() //传入参数转成小写
    if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
    } else {
        let hh = dt.getHours().toString().padStart(2, '0')
        let mm = dt.getMinutes().toString().padStart(2, '0')
        let ss = dt.getSeconds().toString().padStart(2, '0')
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
})





var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})