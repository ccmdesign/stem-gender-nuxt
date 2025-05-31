<template>
  <div class="resource-list">
    <resource-card 
      v-for="resource in resources"
      :key="resource.name"
      :resource="resource" />
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
.resource-list {
  padding-block: var(--space-2xs);
  margin-inline: auto;
  padding-inline: var(--space-m);
  display: flex;
  flex-flow: row nowrap;
  overflow-x: auto;
  gap: var(--space-s);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(var(--space-2xl));
}
</style>