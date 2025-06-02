<template>
  <!-- @ToDo: Translate the whole section -->
  <twin-section class="signup-section">
    <template #left>
      <img class="idrc-logo" src="assets/idrc-logo.png" alt="IDRC Logo" />
    </template>
    <template #right>
      <signup-form />
    </template>
  </twin-section>
</template>

<script setup>
const { locale } = useI18n();


</script>

<style lang="scss" scoped>
.signup-section {
  
}

.idrc-logo {
  width: 200px;
  height: auto;
}

</style>
