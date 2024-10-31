import Vue from 'vue';
import VueRouter from 'vue-router';
import Groups from '../views/Groups.vue';
import Albums from '../views/Albums.vue';
import Songs from '../views/Songs.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/groups', component: Groups },
  { path: '/albums', component: Albums },
  { path: '/songs', component: Songs },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
