import { createWebHistory, createRouter } from "vue-router"


import NewPage from './components/NewPage.vue'
import Quote from './components/Quote.vue'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: NewPage
    },
    {
        name: 'NewPage',
        path: '/home',
        component: NewPage
    },
    {
        name: 'quote',
        path: '/quote',
        component: Quote
    },
    {
        name: 'view-quote',
        path: '/view-quote/:id?',
        component: Quote,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.afterEach(to => {

    if(localStorage.getItem("routes")){
        const routedata = JSON.parse(localStorage.getItem("routes"));
        routedata.push(to);
        localStorage.setItem("routes", JSON.stringify(routedata));
    } else {
        const routedata=[];
        routedata.push(to);
        localStorage.setItem("routes", JSON.stringify(routedata));
    }
});
export default router;