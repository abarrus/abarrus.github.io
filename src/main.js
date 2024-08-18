import Vue from 'vue';
import App from './App.vue';
//import router from './router';  // Optional, if you're using Vue Router
//import store from './store';    // Optional, if you're using Vuex

Vue.config.productionTip = false;

new Vue({
  //router,  // Optional
  //store,   // Optional
  render: h => h(App),
}).$mount('#app');
