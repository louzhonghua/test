import Vue from 'vue'
import VueRouter from 'vue-router'
import * as path from "path";


Vue.use(VueRouter)
const Home =()=>import('views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () =>import('../views/detail/Detail')
const Welcome =()=>import('../views/welcome/Welcome')
const City = () =>import('@/views/welcome/City')
const Test = () =>import('@/views/welcome/Test')
const TreeView = () =>import('@/views/welcome/TreeView')
const routes = [
  {
    path:'',
    redirect:'/welcome'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail/:id',
    component:Detail
  },
  {
    path: '/welcome',
    component:Welcome
  },
  {
    path: '/city/:cityid',
    component:City
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/treeview',
    component:TreeView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})
export default router
