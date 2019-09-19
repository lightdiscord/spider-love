<template>
  <form>
    <label for="publickey" class="block">Your public key</label>
    <textarea 
      id="publickey" 
      name="publickey" 
      rows="6" 
      cols="80" 
      required 
      readonly 
      v-model="key"
      :disabled="loading">
    </textarea>
    <ResetKeysButton @click="regenerate" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import ResetKeysButton from './buttons/ResetKeysButton.vue';

const keyToB64 = (key) => {
  return window.btoa(String.fromCharCode(...new Uint8Array(key)));
}

export default Vue.extend({
  data: () => ({
    key: null,
    loading: false
  }),
  beforeMount() {
    this.regenerate();
  },
  methods: {
    regenerate() {
      this.loading = true;
      this.$store.dispatch('account/keyring/generate')
        .then((keypair) => crypto.subtle.exportKey('spki', keypair.publicKey))
        .then(keyToB64)
        .then((key) => {
          this.key = `-----BEGIN PUBLIC KEY-----\n${key}\n-----END PUBLIC KEY-----`;
          this.loading = false;
        });
    }
  },
  components: {
    ResetKeysButton,
  }
});
</script>
