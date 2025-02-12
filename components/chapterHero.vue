<template>
    <div class="chapter-hero">
      <div class="chapter-hero__info | stack">
        <p class="chapter-hero__brow">{{ brow || 'Breaking Barriers Building Bridges' }}</p>
        <h1 class="chapter-hero__title">{{ heading }}</h1>
        <p v-if="tagline" class="chapter-hero__tagline" data-split>{{ tagline }}</p>
        <nuxt-link :to="localePath('/')" class="chapter-hero__back">Back to title</nuxt-link>
      </div>
      
      <img v-if="image" class="chapter-hero__image" :src="image" />
    </div>
  </template>
  
  <script setup>
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const props = defineProps({
        heading: {
            type: String,
            default: ''
        },
        tagline: {
            type: String,
            default: ''
        },
        brow: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
    });
  </script>
  
<style lang="scss" scoped>
  .chapter-hero {
    --_hero-background-color: var(--primary-color);
    
    background-color: var(--_hero-background-color);
    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    grid-template-areas:
      "image"
      "info";

    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      text-align: right;
      grid-template-areas:
        "info image";
    }
  }

// Typography and Visual Styles

.chapter-hero {
  --_hero-text-color-title: var(--tertiary-color);
  --_hero-text-color: var(--secondary-color);
}

.chapter-hero__info {
  padding: var(--space-s-m);
  grid-area: info;
  display: flex;
  flex-direction: column;
}

.chapter-hero__title {
  font-family: var(--font-title);
  text-transform: uppercase;
  font-weight: 100;
  color: var(--_hero-text-color-title);
  font-size: clamp(3.5rem, 2.1087rem + 6.9565vw, 7.5rem);
  line-height: 1;
  margin-block-start: 0;
  flex: 1;
}

.chapter-hero__tagline {
  font-family: var(--font-decorative);
  font-weight: 300;
  color: var(--_hero-text-color);
  font-size: var(--size-1);
  
}

.chapter-hero__back {
  display: inline-block;
  text-transform: uppercase;
  color: var(--_hero-text-color);
  text-decoration: none;
  font-size: var(--size-1);
  font-weight: 500;
  grid-area: back;
}

.chapter-hero__image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  grid-area: image;
}

.chapter-hero__brow {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--_hero-text-color);
  opacity: 0.3;
}

  </style>