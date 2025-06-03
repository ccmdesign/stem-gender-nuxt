<script setup lang="ts">
import type { NuxtError } from '#app'
const localePath = useLocalePath()

defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div>
    <h2>
      {{ $t('error.title') }}
    </h2>
    <button @click="$router.push(localePath('/'))">
      {{ $t('error.backToHome') }}
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
