import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      name: 'layout',
      component: () => import('../layouts/layoutView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/leaderboard',
          name: 'leaderboard',
          component: () => import('../views/CompetieView.vue')
        },
        {
          path: '/teams/add-team',
          name: 'add-team',
          component: () => import('../views/NewTeamView.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: '/teams/:id',
          name: 'team-detail',
          component: () => import('../views/TeamDetailView.vue')
        },
        {
          path: '/teams/:id/players',
          name: 'team-players',
          component: () => import('../views/TeamPlayersView.vue')
        },
        {
          path: '/teams/:id/players/:playerId',
          name: 'player-detail',
          component: () => import('../views/PlayerDetailView.vue')
        },
        {
          path: '/teams/:id/stadion',
          name: 'stadion-detail',
          component: () => import('../views/StadionView.vue')
        },
        {
          path: '/teams/update/:id',
          name: 'team-update',
          component: () => import('../views/UpdateTeamView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/RegisterView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    }
  ]
})

export default router
