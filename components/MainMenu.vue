
<template>
  <div>
    <span>
      <NuxtLink :to="localePath('/')">Home</NuxtLink>
    </span>
    <span>
      <NuxtLink :to="localePath('/articles')">Articles</NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>

</style>
