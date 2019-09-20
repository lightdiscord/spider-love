<template>
  <div>
    <div v-if="ready">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/settings">Settings</router-link> |
        <router-link to="/secret">Plz don't click</router-link>
      </div>
      <router-view/>
    </div>

    <Setup v-else v-model="ready" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Setup from './Setup.vue';

export default Vue.extend({
  data: () => ({
    ready: false
  }),

  mounted() {
    this.$store.dispatch('account/keyring/generate');
  },

  components: {
    Setup
  }
});
</script>
