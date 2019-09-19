import Vue from 'vue'
import Vuex from 'vuex'

import ProfileModule from './modules/profile';
import KeyringModule from './modules/keyring';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account: {
      namespaced: true,

      modules: {
        profile: ProfileModule,
        keyring: KeyringModule
      }
    }
  }
})
