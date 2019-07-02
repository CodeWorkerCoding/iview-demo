import Vue from 'vue'
import Router from 'vue-router'

import MainFramework from '../components/MainFramework'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainFramework',
      component: MainFramework
    }
  ]
})
