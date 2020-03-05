import Vue from 'vue'
import App from './App.vue'
import {router} from "./router";
import 'bootstrap';
import './assets/app.scss';
import jQuery from 'jquery';
window.$ = window.jQuery =jQuery;
import 'popper.js';
Vue.component('NavBar', require('./components/NavBar.vue').default);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
