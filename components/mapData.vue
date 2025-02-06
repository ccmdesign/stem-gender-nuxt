<template>
  <ul class="map-data" role="list">
    <li 
      :id="`resource-${key}`"
      name="resource-list" 
      class="resource"
      v-for="(resource, key) in resources" 
      :key="key"
      :style="{
        left: resource.position.x,
        top: resource.position.y,
        'anchor-name': `--resource-list-${key}`
      }"
    >
      <button :popovertarget="`resource-list-${key}`">{{ resource.name }}</button>
      
      <ul 
        role="list" 
        class="resource__list" 
        popover 
        :id="`resource-list-${key}`" 
        :style="{'position-anchor': `--resource-list-${key}`
      }">
        <li v-for="(i, index) in resource.resources" :key="index">
          <button @click="toggleCard(index)">{{ i.name }}</button>
        </li>
      </ul>
    </li>
  </ul>
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

.map-data {
  position: absolute;
}

.resource {
  position: absolute;
  width: fit-content;
  white-space: nowrap;
  transform: translateX(var(--size-1));
}

.resource button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: var(--size--1);
  height: var(--size--1);
  background-color: var(--primary-color);
  transform: translate(-140%, 30%);
}

.resource__list {
  position: absolute;
  left: anchor(left);
  top: anchor(bottom);
  position-try-fallbacks: flip-inline;
}

#resource-lk,
#resource-bd,
#resource-nt {
  // isso aqui é para customizar os textos do SriLanka, Bangladesh e Nepal
}
</style>