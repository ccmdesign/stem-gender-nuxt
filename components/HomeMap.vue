<template>
  <div class="home-map">
    <WorldMap class="map" />
    <MapData
      class="data"
      :resources="resources"
      :activeCountry="activeCountry"
      @project-selected="handleProjectSelected"
    />
  </div>
</template>

<script setup lang="ts">
import WorldMap from './worldMap.vue'
import MapData from './mapData.vue'

const props = defineProps({
  resources: {
    type: Object,
    required: true,
    default: () => ({})
  },
  activeCountry: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['project-selected'])
const handleProjectSelected = (payload: any) => emit('project-selected', payload)
</script>

<style scoped lang="scss">
.home-map {
  position: relative;
}
.home-map > .data {
  position: absolute;
  inset: 0;
}
</style>
