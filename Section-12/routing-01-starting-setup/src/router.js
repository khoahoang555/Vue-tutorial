import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '@/pages/TeamsList.vue';
import UsersList from '@/pages/UsersList.vue';
import TeamMembers from '@/components/teams/TeamMembers';
import NotFound from '@/pages/NotFound.vue';
import TeamFooter from '@/pages/TeamFooter.vue';
import UserFooter from '@/pages/UserFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // teams/t1,
      ]
    },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UserFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach(function(to, from) {
  // sending analytics data
  console.log('Global afterEach')
  console.log(to, from);

});

export default router;