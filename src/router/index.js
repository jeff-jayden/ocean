import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home-page.vue'
import Feature from '@/feature/feature.vue'
import Work from '@/work/work.vue'
import FeatureContent from '@/feature/component/feature-content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'biz' },
      component: HomePage,
      children: [
        {
          path: 'biz',
          name: 'biz',
          component: () => import('@/biz/biz-list.vue'),
        },
        {
          path: 'feature',
          name: 'feature',
          component: Feature,
          children: [
            {
              path: 'content',
              name: 'content',
              component: FeatureContent,
            },
          ],
        },
        {
          path: 'work',
          name: 'work',
          component: Work,
        },
      ],
    },
  ],
})

export default router
