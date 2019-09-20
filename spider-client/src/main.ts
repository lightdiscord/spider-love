import Vue from 'vue'
import App from './components/App.vue'
import router from './views/router'
import store from './store'

import 'bulma/bulma.sass';

Vue.config.productionTip = false

export const instance = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
