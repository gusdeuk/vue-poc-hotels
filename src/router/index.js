import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // IMPORTANT // NESTED PATH IN LAYOUT:
    // Note that nested paths that start with / will be treated as a root path.
    // This allows you to leverage the component nesting without having to use a nested URL.

    // layout PUBLIC
    { path: '/', redirect: '/welcome' },
    {
        path: '/public',
        component: () => import('../layouts/PublicLayout/PublicLayout.vue'),
        children: [
            {
                path: '/welcome',
                component: () => import(/* webpackChunkName: 'page-welcome' */ '../pages/WelcomePage/WelcomePage.vue')
            },
            {
                path: '/:catchAll(.*)*',
                component: () => import(/* webpackChunkName: 'page-error' */ '../pages/ErrorPage/ErrorPage.vue')
            }
        ]
    },
    // layout APP with NAV
    {
        path: '/app',
        component: () => import('../layouts/MainLayout/MainLayout.vue'),
        children: [
            {
                path: '/home',
                component: () => import(/* webpackChunkName: 'page-home' */ '../pages/HomePage/HomePage.vue')
            },
            {
                path: '/catalog',
                component: () => import(/* webpackChunkName: 'page-catalog' */ '../pages/CatalogPage/CatalogPage.vue')
            },
            {
                path: '/offers',
                component: () => import(/* webpackChunkName: 'page-offers' */ '../pages/OffersPage/OffersPage.vue')
            },
            {
                path: '/contact',
                component: () => import(/* webpackChunkName: 'page-contact' */ '../pages/ContactPage/ContactPage.vue')
            },
            {
                path: '/test',
                component: () => import(/* webpackChunkName: 'page-test' */ '../pages/TestPage/TestPage.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
