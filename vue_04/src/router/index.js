import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const routes = [{
  path: '/',
  redirect: '/login'
},
// {
//   path: '/about',
//   name: 'About',
//   component:Login
// },
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/home',
  name: 'Home',
  component: Home
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  // 判断访问的页面如果是登录界面则直放行
  if(to.path == '/login') return next()
  // 不是登陆界面 则取token 如果有token则放行 没有 跳转到登陆界面
  const token = window.sessionStorage.getItem('token')
  if(!token){
    return next('/login')
  }
  next()
})

export default router