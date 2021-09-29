import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            authRequired: true
        }
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/Menu.vue')
    },
    {
        path: '/sign-in',
        name: 'signin',
        component: () => import('../views/SignIn.vue')
    }, {
        path: '/join',
        name: 'join',
        component: () => import('../views/Join.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.user) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
