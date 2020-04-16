import Vue from 'vue'
import VueRouter from 'vue-router'

import SignInPage from '../components/pages/SignInPage'
import RegisterPage from '../components/pages/RegisterPage'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
