<template>
    <div class="chapter-hero">
      <div v-if="image" class="chapter-hero__image" :style="`background-image: url(${image})`"></div>
      <div class="chapter-hero__info | stack">
        <div>
          <p class="chapter-hero__brow">{{ brow || 'Breaking Barriers Building Bridges' }}</p>
          <h1 class="chapter-hero__title">{{ heading }}</h1>
        </div>
        <p v-if="tagline" class="chapter-hero__tagline" data-split>{{ tagline }}</p>
      </div>
      
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
    
    display: grid;

    @media screen and (min-width: 1024px) {
    }
  }

  .chapter-hero__image {
    width: 100%;
    height: 85vh;
    background-size: cover;
    background-position: center;
  }

// Typography and Visual Styles

.chapter-hero {
  --_hero-text-color-title: var(--base-color);
  --_hero-text-color: var(--primary-color);
}

.chapter-hero__info {
  position: relative;
  padding: var(--space-l);
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  margin: 0 auto;
  transform: translateY(-25%);
  width: 90vw;
  gap: var(--space-l);
  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
  }
  &::before {
    content: '';
    position: absolute;
    top: var(--space-l);
    bottom: var(--space-l);
    left: 0;
    transform: translateX(-50%);
    width: 16px;
    background-color: var(--primary-color);
  }

  @media (min-width: 768px) {
    transform: translateY(-50%);
    padding: var(--space-2xl);
    width: 70vw;
    &::before {
      top: var(--space-2xl);
      bottom: var(--space-2xl);
    }
  }
}

.chapter-hero__title {
  font-weight: 500;
  color: var(--_hero-text-color-title);
  font-size: var(--size-5);
  letter-spacing: -2%;
  line-height: 1em;
  flex: 1;
}

.chapter-hero__tagline {
  color: var(--_hero-text-color);
  font-size: var(--size-2);
  letter-spacing: 2%;
  line-height: 1.5em;
  @media (min-width: 768px) {
    font-size: var(--size-0);
  }
}

.chapter-hero__brow {
  text-transform: uppercase;
  letter-spacing: 10%;
  font-weight: 500;
  color: var(--_hero-text-color);
  font-size: var(--size-3);
  @media (min-width: 768px) {
    font-size: var(--size-1);
  }
}

  </style>