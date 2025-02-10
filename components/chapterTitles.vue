<template>
  <hgroup class="chapter-titles">
    <h1>
      <span>Breaking Barriers</span><br>
      <span>Building Bridges</span>
    </h1>

    <div class="chapter-header__extras | cluster">
      <a href="public/breaking-barriers-podcast-ai.mp3" download>Podcast(AI)</a>
      <a href="public/breaking-barriers-en.pdf" download>Download PDF</a>
    </div>

    <h2>A Southern-led research network to advance gender equality in STEM</h2>
  </hgroup>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.chapter-titles {
    h1 {
      line-height: .9;
    }
    
    h1 span:first-child {
      font-family: var(--font-display);
      text-transform: uppercase;
      font-weight: 900;
      font-size: var(--size-1);
      letter-spacing: 2px;
      opacity: .25;
      
    }

    h1 span:last-child {
      font-family: var(--font-title);
      font-weight: 100;
      font-size: calc(var(--size-5)*1.53);
      text-transform: uppercase;
    }

    h2 {
      font-size: var(--size-0);
    }
  }

  .chapter-header__extras {
    --_cluster-space: var(--space-2xs);
    --_cluster-horizontal-alignment: flex-end;
    padding-block: var(--space-s);
    a { color: var(--secondary-color); }
  }
</style>