<template>
  <form @submit="submit">
    <fieldset>
      <div class="field">
        <label for="name" class="label">What's your name ?</label>
        <div class="control">
          <input type="text" name="name" id="name" class="input" required v-model="name">
        </div>
      </div>

      <div class="field">
        <label for="description" class="label">How do you describe yourself ?</label>
        <div class="control">
          <textarea
            class="textarea"
            id="description"
            name="description"
            rows="6"
            cols="80"
            required
            v-model="description">
          </textarea>
        </div>
      </div>

      <div class="field">
        <label for="birth" class="label">What's your birth date ?</label>
        <div class="control">
          <input
            type="date"
            id="birth"
            name="birth"
            min="2018-03"
            value="2018-05"
            class="input"
            required
            v-model="birth">
        </div>
      </div>

      <div class="field">
        <label class="label">What's your gender ?</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="gender" value="male" class="radio" v-model="gender">
            Male
          </label>

          <label class="radio">
            <input type="radio" name="gender" value="female" class="radio" v-model="gender">
            Female
          </label>

          <label class="radio">
            <input type="radio" name="gender" value="other" class="radio" v-model="gender">
            Other
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button">Update my profile!</button>
        </div>
      </div>
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
