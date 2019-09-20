import Vue from 'vue'
import Vuex from 'vuex'

import ProfileModule from './modules/profile';
import KeyringModule, { createPlugin } from './modules/keyring';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPlugin()],
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
