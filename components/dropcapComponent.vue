<script lang="ts" setup>
defineProps<{ letter: string }>()
</script>

<template>
  <p class="dropcap"
    :data-letter="letter">
    <slot />
  </p>
</template>
