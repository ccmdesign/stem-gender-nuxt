<template>
  <section class="map-section">
    <div class="map-section__map">
      <slot name="map" />
    </div>
    <div class="map-section__cards">
      <slot name="cards" />
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.map-section {
  padding: var(--space-m-l);
  @media (max-width: 768px) {
    display: none;
  }
}

.map-section__map {
  position: relative;
  height: min-content;
}

.map-section__cards {
  position: relative;
  z-index: 10;
}

.map-grid__idrc-logo,
.map-grid__summary {
  box-shadow: 
    rgba(0, 0, 0, 0.03) 0px 7px 4px -4px, 
    rgba(0, 0, 0, 0.03) 0px 4px 4px -4px, 
    rgba(0, 0, 0, 0.03) 0px 8px 8px -8px,
    rgba(0, 0, 0, 0.035) 0px 16px 16px -16px;

  background-color: var(--white-color);
  z-index: 1;
  
}

.map-grid__summary {
  a {
    color: var(--primary-color);
    font-size: var(--size-1);
    font-weight: 500;
  }
}

.idrc-logo,
.map-grid__idrc-logo {
  max-width: 180px;
  padding: var(--space-s);
}

:deep(.map) {
  height: auto;
}

:deep(.data) {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.mobile-resource-cards {
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: var(--space-s);
  }

  .repel {
    align-items: flex-end;
  }
}

.country-list {
  --_cluster-space: var(--space-2xs);
  padding-block: var(--space-s);

  summary {
    padding-block: var(--space-2xs);
    &::marker {
      color: var(--primary-color);
      content: '+ ';
      font-size: 1.65rem;
    }
    
    * { display: inline-block; }
  }
  &[open] summary::marker { content: '- ' !important; }
}

.country-button {
  color: var(--primary-color);
  font-size: var(--size--1);
}

  .country-button--active {
    font-weight: 500;
  }

.project-summary {
  padding-inline: var(--space-s-m);
  display: flex;
  gap: var(--space-m);
  align-items: center;
  justify-content: center;

  h3 {font-size: var(--size-1);}
  span {
    font-size: var(--size-2);
    font-weight: 800;
    letter-spacing: .5px;
    font-family: var(--font-display);
    color: var(--primary-color);
  }
}
</style>