<template>
  <div class="map-data">
    <button 
      class="map-data__button" 
      v-for="resource in resources" 
      :key="resource.code"
      @click="toggleResource(resource.code)"
      :style="{
        left: resource.position.x,
        top: resource.position.y,
      }"
    >
      <span>{{ resource.name }}</span>
  </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const resources = ref([]);
onMounted(async () => {
  try {
    const response = await fetch('/resourcesByCountry.json');
    resources.value = await response.json();
  } catch (error) {
    console.error('Error fetching resources:', error);
  }
});
console.log(resources);
</script>

<style lang="scss" scoped>

.map-data {
  position: absolute;
}

button {
  position: absolute;
  border-radius: 50%;
  width: var(--size--1);
  height: var(--size--1);
  background-color: var(--primary-color);
}

span {
  display: none;
  position: absolute;
  left: 140%;
  top: 50%;
  width: min-content;
  white-space: nowrap;
  transform: translateY(-50%);
}

button:hover span {
  display: block;
}
</style>