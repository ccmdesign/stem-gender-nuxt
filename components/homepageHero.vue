<template>
  <header class="homepage-hero">
    <div class="homepage-hero__topbar">
      <slot name="topbar" />
    </div>
    <div class="homepage-hero__headings | stack">
      <slot name="headings" />
    </div>
    <div class="homepage-hero__image" aria-hidden="true">
      <slot name="image" />
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

// Mobile Grid
.homepage-hero {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "topbar"
    "headings"
    "image";
}

.homepage-hero__topbar {
   grid-area: topbar;
   z-index: 1;
   margin-bottom: var(--space-xl-2xl);
}

.homepage-hero__headings {
   grid-area: headings;
   z-index: 2;
   --stack-space: var(--space-m-l);
}

.homepage-hero__image {
  grid-area: image;
}

@media (max-width: 480px) {
  .homepage-hero {
    gap: var(--space-l-xl);
  }
}

// Desktop Grid

@media (min-width: 480px) {
  .homepage-hero {
    grid-template-columns: 7fr 1fr var(--space-2xl-3xl) 1fr 7fr;
    grid-template-rows: auto 1fr;
  }

  .homepage-hero__topbar {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }

  .homepage-hero__headings {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    
  }

  .homepage-hero__image {
    grid-column: 4 / 6;
    grid-row: 2 / 3;
    
  }
}

// Styles
.homepage-hero {
  padding: var(--space-2xs) var(--space-m-l) var(--space-xl-2xl) var(--space-m-l);
  background: linear-gradient(88.42deg, #7F2A28 1.35%, #A63330 98.65%), url(/images/pattern.webp);
  background-size: cover, cover;
  background-position: center, center;
  background-blend-mode: overlay;
  position: relative;

  & * { color: var(--white-color); }
}

// Typography
:deep(.homepage-hero__brow) {
  text-transform: uppercase;
  font-size: var(--size-1);
  font-weight: 500;
}

:deep(.homepage-hero__title) {
  font-weight: 600;
  text-wrap: balance;
  line-height: 1.125;
  --stack-space: var(--space-xs-s);
  font-size: clamp(3.5rem, 6.75vw, 4.125rem);
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 2.5rem;
  }
  
}

:deep(.homepage-hero__tagline) {
  font-size: var(--size-0);
  font-weight: 400;
  text-wrap: balance;
}

:deep(.homepage-hero__image) {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  box-shadow: 6px 5px 17px 0px hsla(0, 0%, 0%, 0.16);
  z-index: 1;
  transform: translateY(var(--space-xs-s));
}

.homepage-hero:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 15%;
  background-color: var(--white-color);
}

@media (min-width: 480px) and (max-width: 768px) {
  .homepage-hero:after { display: none; }
}


</style>