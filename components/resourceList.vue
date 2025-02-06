<template>
  <div class="resource-list">
    <h3>Resources</h3>
    <ul class="map-data" role="list">
    <li 
      name="resource-list" 
      class="resource"
      v-for="(resource, key) in resources" 
      :key="key"
    >
      <h4>{{ resource.name }}</h4>
      <ul role="list" class="resource__list" :id="`resource-list-${key}`">
        <li v-for="(i, index) in resource.resources" :key="index">
            <resource-card :resource="i" />
          </li>
        </ul>
    </li>
  </ul>
  </div>
</template>

<script setup>
defineProps({
  resources: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .resource-list { display: none; }
}

.resource-list {
  padding-block: var(--space-l);
  margin-inline: auto;
  padding-inline: var(--space-s);
}
</style>