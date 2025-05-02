<template>
    <nuxt-link class="button" icon="chevron_left" size="sm" visual="unstyled" nopadding color="primary" to="/" @click.prevent="router.back()">{{ $t('back') }}</nuxt-link>
  </template>
  
  <script setup>
    const router = useRouter();
  </script>
  
  <style lang="scss" scoped>
    
  </style>