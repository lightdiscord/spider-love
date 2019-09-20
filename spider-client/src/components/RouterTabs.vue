<template>
  <div class="tabs">
    <ul>
      <router-link
        v-for="route in routes"
        :key="route.to"
        exact-active-class="is-active"
        tag="li"
        :to="route.to">
        <a>{{ route.title }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    routes: [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: 'Settings',
        to: '/settings'
      },
      {
        title: "Plz don't click",
        to: '/secret'
      }
    ]
  }),
});
</script>
