<template>
  <form>
    <label for="publickey" class="block">Your public key</label>
    <textarea id="publickey" name="publickey" rows="6" cols="80" required readonly></textarea>
    <ResetKeysButton />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

import ResetKeysButton from './buttons/ResetKeysButton.vue';

export default Vue.extend({
  components: {
    ResetKeysButton,
  }
});
</script>
