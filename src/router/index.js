import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home= resolve =>{
  require.ensure(['../components/Home.vue'], ()=>{
    resolve(require('../components/Home.vue'))
  })
}
const About= resolve =>{
  require.ensure(['../components/About.vue'], ()=>{
    resolve(require('../components/About.vue'))
  })
}

const contact= resolve =>{
  require.ensure(['../components/contact.vue'], ()=>{
    resolve(require('../components/contact.vue'))
  })
}

const Item= resolve =>{
  require.ensure(['../components/Item.vue'], ()=>{
    resolve(require('../components/Item.vue'))
  })
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home,
  },

  {path:'/about', name:'about', component:About},
  {path:'/contact',name:'contact', component:contact},
  {path:'/item/:img',name:'item',component:Item}
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
})

export default router
