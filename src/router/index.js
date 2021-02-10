import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListSnippet from '@/components/ListSnippet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: ListSnippet
    }
  ]
})
