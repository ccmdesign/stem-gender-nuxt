<template>
  <hgroup class="chapter-titles">
    <h1>
      <img src="/images/logo-footer.svg" alt="Breaking Barriers Building Bridges" />
    </h1>

    <div class="chapter-header__extras | cluster">
      <a href="public/breaking-barriers-podcast-ai.mp3" download>Podcast(AI)</a> | 
      <a :href="`/breaking-barriers-${locale}.pdf`" target="_blank">Report PDF</a>
    </div>

    <h2>{{ $t('tagline') }}</h2>
  </hgroup>
</template>

<script setup>
  const { locale } = useI18n();
</script>

<style lang="scss" scoped>
.chapter-titles {

  h1 img {
    width: 70%;
    padding-block: var(--space-s);
  }
    h2 { font-size: var(--size-1); }
  }

  .chapter-header__extras {
    --_cluster-space: var(--space-2xs);
    @media (min-width: 768px) {
      --_cluster-horizontal-alignment: flex-end;
    }
    padding-block: var(--space-s);
    a { color: var(--secondary-color); }
  }
</style>