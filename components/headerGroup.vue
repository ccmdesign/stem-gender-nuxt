<script lang="ts" setup>
defineProps<{ firstTitle: string, secondTitle: string }>()
</script>

<template>
  <hgroup>
    <h4>{{ firstTitle }}</h4>
    <h3>{{ secondTitle }}</h3>
  </hgroup>
</template>
