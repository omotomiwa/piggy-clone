import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Save from '../components/Save.vue'
import Invest from '../components/Invest.vue'
import Stories from '../components/Stories.vue'
import Faq from '../components/Faq.vue'
import Blog from '../components/Blog.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Save',
    name: 'Save',
    component: Save
  },
  {
    path: '/Invest',
    name: 'Invest',
    component: Invest
  },
  {
    path: '/Stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

