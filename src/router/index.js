import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import SignIn from '../views/SigIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: "/sign-in",
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
