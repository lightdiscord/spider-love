<template>
  <div>
    <h3 class="title is-4">Reset my keyring</h3>
    <p>
      Doing this is not being able to access your account and recreate a new one.
      <strong>This action is irreversible.</strong>
    </p>
    <ResetKeysButton @click="regenerate" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import ResetKeysButton from './buttons/ResetKeysButton.vue';

export default Vue.extend({
  data: () => ({
    key: null,
    loading: false
  }),
  methods: {
    regenerate() {
      this.$store.dispatch('account/keyring/generate')
        .then(() => console.log('regenerate done'));
      // TODO: Delete
      console.log('regenerate')
    }
  },
  components: {
    ResetKeysButton,
  }
});
</script>
