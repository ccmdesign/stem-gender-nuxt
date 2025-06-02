<template>
  <twin-section class="challenge-section">
    <template #left>
      <slot name="left" />
    </template>
    <template #right>
      <slot name="right" />
    </template>
  </twin-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.challenge-section {
  margin-top: var(--space-xl);
}


:deep(.challenge__image) {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}
</style>