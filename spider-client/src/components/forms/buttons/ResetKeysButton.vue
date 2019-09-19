<template>
  <div>
    <button v-if="filter" type="button" @click="reset">Nah, I changed my mind</button>
    <button type="button" @click="click">{{ text }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const sentences = [
  'Reset your private and public key',
  'Are you sure ?',
  'Do you really know what it means ?',
  "It means you can't go back, and it will destroy your account and create a new one",
  'I mean, are you really, really sure about it ?',
  "Ok, I hope you know what you're doing"
];

export default Vue.extend({
  data: () => ({
    text: sentences[0],
    step: 0,
    filter: false,
  }),

  methods: {
    reset() {
      this.step = 0;
      this.text = sentences[0];
      this.filter = false;
    },

    click() {
      this.step += 1;

      if (this.step == sentences.length) {
        this.reset();
        this.$emit('click');
      } else {
        this.filter = this.step % 3 == 0;
        this.text = sentences[this.step];
      }
    },
  },
});
</script>

<style scoped>
button {
  display: block;
}
</style>
