<template>
  <form @submit.prevent class="signup-form">
    <label :for="'signup-input'">{{$t('signupForm.label')}}</label>
    <div class="input-container">
      <input :id="'signup-input'" v-model="signupEmail" type="email" disabled :placeholder="$t('signupForm.placeholder')">
      <button type="submit" class="button" color="primary" disabled visual="primary" size="l">{{$t('signupForm.button')}}</button>
    </div>
    
  </form>
</template>

<script setup>
  const signupEmail = ref('');
</script>

<style lang="scss" scoped>
.signup-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;

  // gap: var(--space-3xs);
}

.input-container {
  display: inline-flex;
  align-items: center;
  justify-content: stretch;
}

label {
  font-weight: 700;
}

input {
  padding: calc(var(--space-s) - 2px);
  background-color: var(--base-color-05-tint);
  border: 0;
  flex: 1;
}

.button {
  color: var(--white-color);
  border: 0;
}

</style>
