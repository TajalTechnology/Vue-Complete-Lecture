import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
/*Array of Paths*/
const routes = [

    // {path: '/t', component: NavBar, name: 'NavBar'}


];

/*Exporting Array of Paths*/
export const router = new VueRouter({
    mode: 'history',
    // hides hash in url after localhost:8080
    routes: routes
});