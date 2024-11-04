import IconView from '@/views/IconView.vue'

export default [
  {
    path: '/',
    name: 'icon',
    component: IconView
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import('@/views/AvatarView.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/ButtonView.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('@/views/CardView.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/views/DialogView.vue')
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: () => import('@/views/CollapseView.vue')
  },
  {
    path: '/pager',
    name: 'pager',
    component: () => import('@/views/PagerView.vue')
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: () => import('@/views/TooltipView.vue')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import('@/views/DropdownView.vue')
  }
]