<style scoped>
span.tag {
  width: 100%;
}
</style>

<template>
  <div class="container">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Application setup</h1>
        <progress
          class="progress"
          :max="checks.length"
          :value="checks.filter(({ state }) => state).length">
        </progress>
      </div>
    </div>

    <div class="columns" v-for="check in checks" :key="check.title">
      <div class="column is-one-fifth">
        <span :class="['tag', { 'is-success': check.state }]" >
          {{ check.state ? 'Done!' : 'Working...' }}
        </span>
      </div>
      <div class="column">
        {{ check.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['checks']
});
</script>
