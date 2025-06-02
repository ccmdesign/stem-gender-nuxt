<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="podcast-page">
    <ArticleAudio src="/audios/breaking-barriers-building-bridges-podcast-en.mp3" />
  </div>
</template>


<style scoped>
.podcast-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}
</style>