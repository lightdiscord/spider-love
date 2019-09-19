<template>
  <form>
    <fieldset>
      <legend>Talk about yourself</legend>

      <div>
        <label for="name" class="block">What's your name ?</label>
        <input type="text" name="name" id="name" class="block" required>
      </div>

      <div>
        <label for="description" class="block">How do you describe yourself ?</label>
        <textarea id="description" name="description" rows="6" cols="80" required></textarea>
      </div>

      <div>
        <label for="birth" class="block">What's your birth date ?</label>
        <input type="date" id="birth" name="birth" min="2018-03" value="2018-05" class="block" required>
      </div>

      <fieldset>
        <legend>What's your gender ?</legend>

        <div>
          <input type="radio" id="male" name="gender" value="male">
          <label for="male">Male</label>
        </div>

        <div>
          <input type="radio" id="female" name="gender" value="female">
          <label for="female">Female</label>
        </div>

        <div>
          <input type="radio" id="other" name="gender" value="other" checked>
          <label for="other">Other</label>
        </div>
      </fieldset>

      <button type="submit">Update my profile!</button>
    </fieldset>
  </form>
</template>
