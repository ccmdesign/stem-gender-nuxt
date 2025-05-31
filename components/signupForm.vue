<template>
  <form @submit.prevent class="signup-form">
    <div>
      <label :for="'signup-input'">Sign up for IDRC news</label>
      <input :id="'signup-input'" v-model="signupEmail" type="email" disabled placeholder="Email address">
    </div>
    <button type="submit" class="button" color="primary" disabled visual="secondary">Subscribe</button>
  </form>
</template>

<script setup>
const signupEmail = ref('');


</script>

<style lang="scss" scoped>
.signup-form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--s0);
  color: var(--base-color, #333);
  
  @media screen and (min-width: 480px) {
    flex-direction: row;
    gap: 0;
  }
}

.signup-form {

  & div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    background-color: #F5F5F5;
    border-color: transparent;
    padding: 8px;
    height: 47px;
    font-size: small;
    
    &::placeholder {
      color: var(--base-color, #333);
    }
    

  }
}

label {
  font-weight: 700;
}

.button {
  width: 100%;
  height: 47px;
  color: var(--white-color);
  background-color: hsla(var(--_button-hsl), 1);
  font-size: var(--size-0);
  align-self: end;
  margin-left: 5px;
  font-weight: 500;
}

</style>
