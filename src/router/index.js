import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import(/* webpackChunkName: "pocetna" */ '../components/Pocetna.vue')
  },
  {
    path: '/salonpocetna',
    name: 'salonpocetna',
    component: () => import(/* webpackChunkName: "salonpocetna" */ '../components/SalonPocetna.vue')
  },
  {
    path: '/korisnikpocetna',
    name: 'korisnikpocetna',
    component: () => import(/* webpackChunkName: "korisnikpocetna" */ '../components/KorisnikPocetna.vue')
  },
  {
    path: '/salon/:id',
    props: true,
    name: 'salon-info',
    component: () => import(/* webpackChunkName: "salon-info" */ '../components/SalonInfo.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../components/Profile.vue')
  },
  {
    path: '/dodajsliku',
    name: 'dodajsliku',
    component: () => import(/* webpackChunkName: "dodajsliku" */ '../components/DodajSliku.vue')
  },
  {
    path: '/profilelook',
    name: 'profilelook',
    component: () => import(/* webpackChunkName: "profilelook" */ '../components/ProfileLook.vue')
  },
  {
    path: '/dodajtermin',
    name: 'dodajtermin',
    component: () => import(/* webpackChunkName: "dodajtermin" */ '../components/DodajTermin.vue')
  },
  {
    path: '/pogledajrezervacije',
    name: 'pogledajrezervacije',
    component: () => import(/* webpackChunkName: "pogledajrezervacije" */ '../components/PogledajRezervacije.vue')
  },
  {
    path: '/korisnikrezervacija',
    name: 'korisnikrezervacija',
    component: () => import(/* webpackChunkName: "korisnikrezervacija" */ '../components/KorisnikRezervacija.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
