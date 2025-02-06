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
      <button :popovertarget="`resource-list-${key}`"><span>{{ resource.name }}</span></button>
      
      <ul 
        role="list" 
        class="resource__list" 
        popover 
        :id="`resource-list-${key}`" 
        :style="{'position-anchor': `--resource-list-${key}`
      }">
        <li v-for="(i, index) in resource.resources" :key="index">
          <span></span>
          <button @click="toggleCard(key, index)">{{ i.name }}</button>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { defineEmits } from 'vue';
defineProps({
  resources: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const emit = defineEmits(['project-selected']);

const toggleCard = (countryCode, projectIndex) => {
  emit('project-selected', { countryCode, projectIndex });
};
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

.resource__list li {
  position: relative;
}

.resource button:before,
.resource__list li:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  width: var(--size--1);
  height: var(--size--1);
  background-color: var(--primary-color);
  transform: translate(calc(var(--size-1) * -1), 30%);
}

.resource__list {
  position: absolute;
  left: calc(anchor(left) + var(--size-1));
  top: anchor(bottom);
  position-try-fallbacks: flip-inline;
  overflow: visible;
}

.resource span { opacity: 0; }


.resource button:has(:popover-open) span,
.resource:hover span { opacity: 1; }



// isso aqui é para o efeito de fade-in/out dos recursos
.map-data:has(:popover-open) {
  .resource { opacity: .25;}
  .resource:has(:popover-open) { opacity: 1;}
}


#resource-lk,
#resource-bd,
#resource-nt {
  // isso aqui é para customizar os textos do SriLanka, Bangladesh e Nepal
}
</style>