<template>
    <div class="chapter-hero">
        <div class="chapter-hero__info">
            <div class="chapter-hero__header">
                <p v-if="brow" class="chapter-hero__brow">{{ brow }}</p>
                <h1 class="chapter-hero__title">{{ heading }}</h1>
            </div>
            <p v-if="tagline" class="chapter-hero__tagline">{{ tagline }}</p>
            <nuxt-link to="/articles" class="chapter-hero__back">Back to title</nuxt-link>
        </div>
        <div v-if="image" class="chapter-hero__image" :style="`background-image:url('${image}')`"></div>
    </div>
  </template>
  
  <script setup>
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
    background-color: var(--primary-color);
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50vh;
            background: linear-gradient(0deg, var(--primary-color) 0%, var(--primary-color-30-alpha) 50%, transparent 100%);
        }
    }
  }

    .chapter-hero__info {
        padding: var(--space-xl);
        width: 50%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        gap: var(--space-l);
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }

    .chapter-hero__header {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        gap: var(--space-m);
        @media screen and (max-width: 800px) {
            position: absolute;
            top: 50vh;
            transform: translateY(-100%);
        }
    }


    .chapter-hero__brow {
        font-family: var(--font-display);
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-weight: 700;
        color: var(--secondary-color);
        opacity: 0.3;
        width: 100%;
        @media screen and (max-width: 800px) {
            opacity: 1;
        }
    }

    .chapter-hero__title {
        font-family: var(--font-title);
        text-transform: uppercase;
        text-align: right;
        font-weight: 300;
        color: var(--tertiary-color);
        width: 100%;
        font-size: 9vw;
        padding-bottom: var(--space-m);
    }

    .chapter-hero__tagline {
        font-family: var(--font-decorative);
        text-align: right;
        font-weight: 300;
        color: var(--tertiary-color);
        width: 80%;
        font-size: 1.5em;
    }

    .chapter-hero__back {
        text-transform: uppercase;
        color: var(--secondary-color);
        text-decoration: none;
        font-size: 1.125em;
        font-weight: 500;
        @media screen and (max-width: 800px) {
            position: absolute;
            top: var(--space-l);
            left: var(--space-m);
        }
    }
    
    .chapter-hero__image {
        width: 50%;
        background-size: cover;
        background-position: center;
        @media screen and (max-width: 800px) {
            width: 100%;
            height: 50vh;
        }
    }
  </style>