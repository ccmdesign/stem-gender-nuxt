<template>
  <div class="resource-card | stack" :class="{ 'hidden': !isVisible }">
    <div class="repel">
      <h5 class="resource-card__country">{{ resource.region }}</h5>
      <h5 class="resource-card__status">{{ resource.status }}</h5>
    </div>
    <h2 class="resource-card__title">{{ resource.name }}</h2>
    <p class="resource-card__description">{{ resource.project_type }}</p>
    <a class="button" data-color="primary" data-visual="secondary" :href="resource.url" target="_blank">Read More</a>
  </div>
</template>

<script setup>
defineProps({
  resource: {
    type: Object,
    required: true
  },
  isVisible: {
    type: Boolean,
    required: false,
    default: true
  }
});
</script>

<style lang="scss" scoped>
.resource-card {
  padding-inline: var(--space-m);
  padding-block: var(--space-m) var(--space-2xl);
  border: 1px solid var(--primary-color-30-tint);
  background-color: var(--white-color);
  box-shadow: var(--box-shadow-m);
  max-width: 480px;
  flex-shrink: 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: var(--space-m);
    bottom: var(--space-m);
    left: -3px;
    width: 6px;
    background-color: var(--primary-color);
  }
}

.resource-card__country,
.resource-card__status {
  font-size: var(--size--2);
  font-weight: 600;
  letter-spacing: .5px;
  text-transform: uppercase;
}

.resource-card__country {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
    flex-shrink: 1;
    max-width: 75%;
}

.resource-card__title {
  font-size: var(--size-0);
  color: var(--primary-color);
  font-weight: 600;
  line-height: 1.2em;
  letter-spacing: -0.002em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.resource-card__description {
  font-size: var(--size--1);
}

.button {
  border-width: 1px;
  position: absolute;
  bottom: var(--space-m);
  left: var(--space-m);
}
</style>