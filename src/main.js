// 入口文件
import Vue from "Vue"
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2配置路由模块
Vue.use(VueRouter)

import app from './App.vue'

// 导入MUI的样式

import './lib/mui/css/mui.min.css'

// 因为num-box的问题,需要用到ement-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




import './lib/mui/css/icons-extra.css'




// get post jsonp $http
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
    Lazyload,
    Switch

} from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload);
Vue.component(Switch.name, Switch);

//1.3导入自己的router.js路由模块
import router from './router.js'

// 缩略图
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)


//vueX数据共享使用

// 1.安装到modulesvuex
// npm vuex

// 2.注册vuex
import Vuex from 'vuex'

// 3安装vuex
Vue.use(Vuex)

// 每次刚进入网站, 肯定会调用main.js在刚调用的时候, 先从本地存储中, 把购物车的数据读取出来放到store
// 当更新car 之后,要把car数组,保存到localstorage中
var car = JSON.parse(localStorage.getItem('car') || '[]')

// 4使用
let store = new Vuex.Store({
    state: { //使用:this.$store.state.***
        car: car // id: 商品的id,count要购买的数量,price:商品的单价,selected:false
    },
    mutations: { //使用:this.$store.commit('方法名',参数)
        addToCar(state, goodinfo) {
            //点击加入购物车,吧商品信息,保存到store中的car上
            //分析
            // 1.如果购物车中,之前就已经有了对应的商品了,那么,只需要更新数量
            // 2.如果没有,则直接把商品数据,push到car中

            flag = false
            state.car.some(item => {
                if (item.id == goodinfo.id) {
                    console.log(goodinfo.count);
                    item.count += parseInt(goodinfo.count)
                    flag = true
                    return true
                }


            })
            // 如果循环完flag还是false就走下面的代码
            if (flag == false) {
                // goodinfo.是通过 $store.commit('方法名', 参数)
                state.car.push(goodinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },

        // 修改购物车的商品数量值
        updateGoodsInfo(state, goodinfo) {
            console.log(goodinfo.id);

            // 修改购物车的商品数量值
            state.car.some(item => {
                console.log(item.id);

                if (parseInt(item.id) === parseInt(goodinfo.id)) {
                    item.count = parseInt(goodinfo.count)
                    // console.log(state.car);
                    return true
                }

            })
            // 当修改完商品的数量,把最新的购物车数据,保存到本地的存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },

        // 删除本地loacl
        removeFormCar(state, id) {
            // console.log(item.id);

            state.car.some((item, i) => {
                console.log(item.id);
                if (item.id == id) {
                    console.log('ok');
                    state.car.splice(i, 1)
                    return true
                }

            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        // 控件的false与true
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.select = info.select
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))

        }





    },
    getters: { // 使用: this.$store.getters.***
        // 显示详情页徽章数量
        getAll(state) {
            let c = 0
            state.car.forEach(element => {

                c = c + parseInt(element.count)
                console.log(c);

            });
            return c
        },
        //  显示购物车徽章数量
        getGoodCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            });
            return o
        },
        // 显示控件的true和false
        getGoodsSelected(state) {

            var o = {}
            state.car.forEach(item => {

                console.log(item);
                o[item.id] = item.select
            })
            return o
        },
        // 商品件数和金额总数
        getAmount(state) {
            var o = {
                count: 0, //数量
                amount: 0 //总价
            }
            state.car.forEach(item => {
                if (item.select == true) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }

    }
})


// 5渲染
// store




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
    router,
    store
})