<script lang="ts" setup>
defineProps<{ imageClass: string, url: string }>()
</script>

<template>
  <div :class="imageClass"
    :style="`background-image:url(${url})`" />
</template>
