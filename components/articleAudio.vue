<template>
  <audio class="audio" v-if="src" controls>
    <source :src="src" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<style scoped lang="scss">
.audio {
  width: 100%;
}
</style>