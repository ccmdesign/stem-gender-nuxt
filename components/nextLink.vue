<template>
    <nuxt-link class="button" icon-after="chevron_right" size="sm" visual="unstyled" nopadding color="primary" :to="url">{{ $t('nextChapter') }}</nuxt-link>
  </template>
  
  <script setup>
  const props = defineProps({
    url: {
      type: String
    }
  })
  </script>
  
  <style lang="scss" scoped>
    
  </style>