// 路由器对象模块

import Vue from 'vue'
import  VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'



Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showfooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showfooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showfooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showfooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login,
            meta:{
                showfooter:false
            }
        }

    ]
})


