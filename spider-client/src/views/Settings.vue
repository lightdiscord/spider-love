<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">Configure your profile</h2>
          <p class="subtitle">Talk about yourself</p>
        </div>
      </div>
    </section>

    <div class="container">
      <ProfileForm />
    </div>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">Danger zone</h2>
          <p class="subtitle">We hope you know what you're doing</p>
        </div>
      </div>
    </section>

    <div class="container">
      <fieldset>
        <ResetKeysForm />
      </fieldset>
    </div>
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
