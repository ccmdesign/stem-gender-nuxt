<template>
  <main class="homepage-layout">
    <div class="top-bar">
      <slot name="top-bar" />
    </div>

    <div class="hero">
      <slot name="hero" />
    </div>

    <section class="intro">
      <slot name="intro" />
    </section>

    <section class="report">
      <slot name="report" />
    </section>

    <section class="map-grid">
      <slot name="map-grid" />
    </section>

    <section class="challenge">
      <slot name="challenge" />
    </section>

    <section class="sign-up">
      <slot name="sign-up" />
    </section>

    <div class="footer">
      <slot name="footer" />
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>