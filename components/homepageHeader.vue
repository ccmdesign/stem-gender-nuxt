<template>
  <header class="homepage-header">
    <div class="homepage-header__topbar">
      <slot name="topbar" />
    </div>
    <div class="homepage-header__headings | stack">
      <slot name="headings" />
    </div>
    <div class="homepage-header__image" aria-hidden="true">
      <slot name="image" />
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

// Mobile Grid
.homepage-header {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "topbar"
    "headings"
    "image";
}

.homepage-header__topbar {
   grid-area: topbar;
   z-index: 1;
   margin-bottom: var(--space-xl-2xl);
}

.homepage-header__headings {
   grid-area: headings;
   z-index: 2;
   --stack-space: var(--space-m-l);
}

.homepage-header__image {
  grid-area: image;
}

@media (max-width: 480px) {
  .homepage-header {
    gap: var(--space-l-xl);
  }
}

// Desktop Grid

@media (min-width: 480px) {
  .homepage-header {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 1fr;
  }

  .homepage-header__topbar {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }

  .homepage-header__headings {
    grid-row: 2 / 3;
    grid-column: 1 / 10;
  }

  .homepage-header__image {
    grid-column: 8 / -1;
    grid-row: 2 / 3;
    
  }
}

// Styles
.homepage-header {
  padding: var(--space-2xs) var(--space-m-l) var(--space-m-l) var(--space-m-l);
  background: linear-gradient(88.42deg, #7F2A28 1.35%, #A63330 98.65%), url(/images/pattern.webp);
  background-size: cover, cover;
  background-position: center, center;
  background-blend-mode: overlay;
  position: relative;

  & * { color: var(--white-color); }
}

// Typography
:deep(.homepage-header__brow) {
  text-transform: uppercase;
  font-size: var(--size-1);
  font-weight: 500;
}

:deep(.homepage-header__title) {
  font-size: clamp(4rem, 6.75vw, 6.25rem);
  font-weight: 600;
  text-wrap: balance;
  line-height: 1.125;
  --stack-space: var(--space-m-l);
}

:deep(.homepage-header__tagline) {
  font-size: var(--size-0);
  font-weight: 400;
  text-wrap: balance;
}

.homepage-header__image {
  aspect-ratio: 1;
  background-image: url(/images/lessons-learned.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 6px 5px 17px 0px hsla(0, 0%, 0%, 0.16);
  z-index: 1;
}

.homepage-header:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 15%;
  background-color: var(--white-color);

}
</style>