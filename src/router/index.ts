import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CompetieView.vue')
    },
    {
      path: '/teams/add-team',
      name: 'add-team',
      component: () => import('../views/NewTeamView.vue')
    },
    {
      path: '/teams/:id',
      name: 'team-detail',
      component: () => import('../views/TeamDetailView.vue')
    },
    {
      path: '/teams/update/:id',
      name: 'team-update',
      component: () => import('../views/UpdateTeamView.vue')
    }
  ]
})

export default router
