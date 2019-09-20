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
