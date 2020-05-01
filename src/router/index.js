import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Theme from '../views/Theme.vue'

Vue.use(VueRouter)

  const routes = [
  {path: '/', 			name: 'Home', 		component: Home},
  {path: '/about', 		name: 'About', 		component: About},
  {path: '/contact', 	name: 'Contact', 	component: Contact},
  {path: '/theme', 		name: 'Theme', 		component: Theme},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
