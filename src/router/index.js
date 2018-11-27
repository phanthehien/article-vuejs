import Vue from 'vue';
import Router from 'vue-router';
import ListComponent from '@/components/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articlelist',
      component: ListComponent,
    },
  ],
});
