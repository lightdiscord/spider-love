<template>
  <div>
    <ProfileForm />

    <fieldset>
      <legend>Danger zone!</legend>

      <ResetKeysForm />
    </fieldset>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import ProfileForm from '@/components/forms/ProfileForm.vue';
import ResetKeysForm from '@/components/forms/ResetKeysForm.vue';

export default Vue.extend({
  components: {
    ProfileForm,
    ResetKeysForm
  }
});
</script>

<style>
fieldset {
  margin-top: 1rem;
}

legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

fieldset > *:nth-child(n+3) {
  margin-top: 1rem;
}

.block {
  display: block;
}
</style>
