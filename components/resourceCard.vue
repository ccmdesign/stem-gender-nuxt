<template>
  <div class="resource-card | stack" :class="{ 'hidden': !isVisible }">
    <div class="repel">
      <h5 class="resource-card__country">{{ resource.region }}</h5>
      <h5 class="resource-card__status">{{ resource.status }}</h5>
    </div>
    <h2 class="resource-card__title">{{ resource.name }}</h2>
    <p class="resource-card__description">{{ resource.project_type }}</p>
    <a class="button" data-color="tertiary" data-visual="primary" :href="resource.url" target="_blank">Read More</a>
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
  padding: var(--space-m);
  border: 1px solid var(--primary-color-30-tint);
  background-color: var(--white-color);
  box-shadow: var(--box-shadow-m);
}

.resource-card__country,
.resource-card__status {
  font-size: var(--size--1);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: .5px;
  color: var(--primary-color);
}

.resource-card__title {
  font-size: var(--size--1);
}

.resource-card__description {
  font-size: var(--size--2);
}
</style>