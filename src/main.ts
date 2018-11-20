import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vueRx from 'vue-rx';
import Rx from 'rxjs';

import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(vueRx, Rx);

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// axios.defaults.headers.common['Authorization'] = '';
// axios.defaults.headers.get['Accepts'] = 'application/json';



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// git add dist && git commit -m "deploy"
// git subtree push --prefix dist origin gh-pages

