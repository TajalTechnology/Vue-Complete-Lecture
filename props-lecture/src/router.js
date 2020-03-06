import Vue from 'vue'
import VueRouter from 'vue-router'
import PropsAccept from "./components/PropsAccept";

Vue.use(VueRouter)

const routes = [
    // {path: '/', component: PropsAccept, name: 'PropsAccept'},
    {path: '/p', component: PropsAccept, name: 'PropsAccept'}
];

export const router = new VueRouter(
    {
        mode: 'history',
        routes: routes
    }
);