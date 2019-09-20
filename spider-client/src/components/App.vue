<template>
  <div>
    <div v-if="ready">
      <RouterTabs />
      <router-view/>
    </div>

    <keep-alive v-else>
      <Setup :checks="checks" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

import Setup from './Setup.vue';
import RouterTabs from './RouterTabs.vue';

const keyring = createNamespacedHelpers('account/keyring');

export default Vue.extend({
  computed: {
    ...keyring.mapState({
      keyring: state => state.ready
    }),

    checks() {
      return [
        {
          title: 'Account keyring generation',
          state: this.keyring
        }
      ];
    },

    ready() {
      return !this.checks.some(({ state }) => !state);
    }
  },

  mounted() {
    this.$store.dispatch('account/keyring/generate');
  },

  components: {
    Setup,
    RouterTabs
  }
});
</script>
