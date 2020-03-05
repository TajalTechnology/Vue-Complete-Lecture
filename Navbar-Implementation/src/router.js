/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import NavBar from "./components/NavBar";
import Home from "./components/views/Home";
import About from "./components/views/About";



/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);


/*Array of Paths*/
const routes = [

    {path: '/t', component: NavBar, name: 'NavBar'},
    {path: '/home', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'},


];

/*Exporting Array of Paths*/
export const router = new VueRouter({
    mode: 'history',
    // hides hash in url after localhost:8080
    routes: routes
});