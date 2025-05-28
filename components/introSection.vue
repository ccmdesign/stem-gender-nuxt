<template>
  <twin-section class="intro-section">
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
.intro-section {
  h3 {
    text-transform: uppercase;
    font-size: var(--size-0);
    font-weight: 600;
    color: var(--primary-color);
  }  
}

:deep(.research-grid) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xs);
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  p {
    padding: var(--space-m);
    font-size: var(--size-0);
    font-weight: 400;
    background-color: var(--black-color-05-alpha);
  }
}
</style>