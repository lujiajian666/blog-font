import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import( /* webpackChunkName: "article" */ './views/Article.vue')
    }
  ]
})
