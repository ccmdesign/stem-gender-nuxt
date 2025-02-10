<template>
  <div class="resource-card | map-grid__content | stack" :class="{ 'hidden': !isVisible }">
    <div class="repel">
      <h5 class="resource-card__country">{{ resource.region }}</h5>
      <h5 class="resource-card__status">{{ resource.status }}</h5>
    </div>
    <h3 class="resource-card__title">{{ resource.name }}</h3>
    <p class="resource-card__description">{{ resource.project_type }}</p>
    <a :href="resource.url" target="_blank">{{ resource.url }}</a>
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
    required: true,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.resource-card {
  padding: var(--space-m);
  border: 1px solid var(--base-color);
  background-color: var(--white-color);
}

.resource-card__country,
.resource-card__status {
  font-size: var(--size--2);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: .4px;
  color: var(--base-color);
}

.resource-card__title {
  font-size: var(--size--1);
}

.resource-card__description {
  font-size: var(--size--2);
}
</style>