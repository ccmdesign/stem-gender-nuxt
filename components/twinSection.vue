<template>
  <section class="twin-section">
    <div class="twin-section__left">
      <slot name="left" />
    </div>
    <div class="twin-section__right">
      <slot name="right" />
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.twin-section {
  display: flex;
  gap: var(--space-2xl-3xl);
  flex-direction: column;
  padding: var(--space-m-l);
  > * { flex: 1; }

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

</style>