import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import FrontAnimate from '@/components/FrontAnimate'
import Main from '@/components/Main'
import Home from '@/components/Main/Home'
import Home2 from '@/components/Main/Home2'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',  //登录
            name: 'login',
            component: Login
        },
        {
            path: '/front', //进入前动画页面
            name: 'front',
            component: FrontAnimate
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            redirect:"/main/home",
            children:[
                {
                    path:"home",
                    name:"home",
                    component:Home,
                },{
                    path:"home2",
                    name:"home2",
                    component:Home2,
                }
            ]
        },
        {
            path: '*',
            redirect:"/login"
        },

    ]
})
