<template>
  <form @submit="submit">
    <fieldset>
      <legend>Talk about yourself</legend>

      <div>
        <label for="name" class="block">What's your name ?</label>
        <input type="text" name="name" id="name" class="block" required v-model="name">
      </div>

      <div>
        <label for="description" class="block">How do you describe yourself ?</label>
        <textarea id="description" name="description" rows="6" cols="80" required v-model="description"></textarea>
      </div>

      <div>
        <label for="birth" class="block">What's your birth date ?</label>
        <input type="date" id="birth" name="birth" min="2018-03" value="2018-05" class="block" required v-model="birth">
      </div>

      <fieldset>
        <legend>What's your gender ?</legend>

        <div>
          <input type="radio" id="male" name="gender" value="male" v-model="gender">
          <label for="male">Male</label>
        </div>

        <div>
          <input type="radio" id="female" name="gender" value="female" v-model="gender">
          <label for="female">Female</label>
        </div>

        <div>
          <input type="radio" id="other" name="gender" value="other" v-model="gender">
          <label for="other">Other</label>
        </div>
      </fieldset>

      <button type="submit">Update my profile!</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    name: null,
    description: null,
    birth: null,
    gender: 'other'
  }),

  beforeMount() {
    const { name, description, birth, gender } = this.$store.state.account.profile;

    this.name = name;
    this.description = description;
    this.birth = birth;
    this.gender = gender;
  },

  methods: {
    submit(event: Event) {
      const { name, description, birth, gender } = this;

      event.preventDefault();
      this.$store.commit('account/profile/update', {
        name,
        description,
        birth,
        gender
      });
    }
  }
});
</script>
