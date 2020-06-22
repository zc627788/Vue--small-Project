import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import shopContainer from './components/tabbar/shopcarContainer.vue'
import VIPContainer from './components/tabbar/VIPContainer.vue'
import Newslist from './components/news/Newlist.vue'
import Newinfo from './components/news/Newinfo.vue'
import Photoes from './components/photoes/photoes.vue'
import photoesinfo from './components/photoes/photoesinfo.vue'
import shopping from './components/shopping/shopping.vue'




// 3. 创建路由对象
var router = new VueRouter({
    routes: [ //配置路由规则
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
        {
            path: '/shopcar',
            component: shopContainer
        },
        {
            path: '/VIP',
            component: VIPContainer
        },
        {
            path: '/home/newslist',
            component: Newslist
        },
        {
            path: '/newlist/newsinfo/',
            component: Newinfo

        }, {
            path: '/home/photoes/',
            component: Photoes

        },
        {
            path: '/home/photoesinfo/:id',
            component: photoesinfo
        },
        {
            path: '/home/shopping/',
            component: shopping
        }


    ],
    linkActiveClass: 'mui-active' //覆盖默认路由高亮的类,默认的类叫做
    //router-link-active
})

// 把路由对象暴露出去
export default router