// 入口文件
import Vue from "Vue"

import app from './App.vue'

// 导入MUI的样式

import './lib/mui/css/mui.min.css'


import {
    Header
} from 'mint-ui'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})