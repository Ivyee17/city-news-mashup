import Vue from 'vue'
import Router from 'vue-router'

import Map from '../components/Map'
import Movie from '../components/News'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Router)

export default new Router({
  base: '/news/',
  routes: [
    {
      path: '/',
      name: 'Index Page',
      component: Map
    }
  ]
})
