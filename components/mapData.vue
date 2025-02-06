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
  width: 16px;
  height: 16px;
  background-color: red;
}

span {
  position: absolute;
  left: 140%;
  top: 50%;
  width: min-content;
  white-space: nowrap;
  transform: translateY(-50%);
}
</style>