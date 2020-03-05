/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld";



/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);


/*Array of Paths*/
const routes = [

    {path: '/hello-world', component: HelloWorld, name: 'HelloWorld'},


];

/*Exporting Array of Paths*/
export const router = new VueRouter({
    mode: 'history',
    // hides hash in url after localhost:8080
    routes: routes
});