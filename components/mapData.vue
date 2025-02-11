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
      <button :popovertarget="`resource-list-${key}`" :id="`trigger-${key}`" @click="findPopover(key)">
        <span class="circle"></span>
        <span class="name" :style="{'position-anchor': `--resource-list-${key}`}">{{ resource.name }}</span>
      </button>
      
      <ul 
        role="list" 
        class="resource__list" 
        popover 
        :id="`resource-list-${key}`" 
        :style="{'position-anchor': `--resource-list-${key}`}">
        <li v-for="(i, index) in resource.resources" :key="index">
          <span class="circle"></span>
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

const findPopover = (id) => {
  const trigger = document.querySelector(`#trigger-${id}`);
  const popover = document.querySelector(`#resource-list-${id}`);
  
  window.setTimeout(function() {
    const triggerPos = trigger.getBoundingClientRect().x;
    const popoverPos = popover.getBoundingClientRect().x;
    if(popoverPos == 0) {
      popover.classList.remove('resource-list--fallback');
    } else if(triggerPos != popoverPos) {
      popover.classList.add('resource-list--fallback');
    }
  },1)
}
</script>

<style lang="scss" scoped>

.map-data {
  position: absolute;
}

.resource {
  position: absolute;
  width: fit-content;
  white-space: nowrap;

  --_gap: var(--space-xs);
}

.resource__list li:not(:last-child):before {
  content: "";
  border-left: 2px solid var(--primary-color);
  position: absolute;
  left: calc(var(--size--2) / 2 - 1px);
  top: var(--size--1);
  bottom: calc(var(--size--1) * -1);
}

.resource__list li {
  position: relative;
  text-wrap: balance;
  max-width: 60ch;
}

.resource button {

  .name {
    text-wrap: nowrap;
    position: absolute;
    left: anchor(right);
    top: calc(anchor(bottom) + var(--space-3xs));
    position-try-fallbacks: flip-inline;
    margin-inline: var(--space-2xs);
  }
}

.resource .circle {
  --_circle-hsl: var(--primary-hsl);
  --_circle-border-hsl: var(--base-hsl);

  border-radius: 50%;
  width: var(--size--2);
  height: var(--size--2);
  display: inline-block;
  background-color: hsla(var(--_circle-hsl), 1);
  transition: opacity 0.2s ease-in-out;
  outline: 8px solid hsla(var(--_circle-border-hsl), .15);
}

.resource__list {
  position: absolute;
  left: anchor(left);
  top: calc(anchor(bottom) + var(--space-3xs));
  position-try-fallbacks: flip-inline;
  overflow: visible;
  margin: 0;

  li {
    display: grid;
    grid-template-columns: var(--size--1) 1fr;
    grid-template-areas: "circle name";
    grid-template-rows: 1fr;
    align-items: flex-start;
    gap: calc(var(--_gap) * .75); // por algum motivo isso estva ficando diferente. 

    & + li { margin-top: var(--space-3xs); }
    
    .circle { 
      transform: translateY(.25rem); 
      --_circle-hsl: var(--base-hsl);
      --_circle-border-hsl: var(--primary-hsl);
    }
  }
}

  .resource-list--fallback {
    li {
      grid-template-columns: 1fr var(--size--1);
      transform: translateX(.25rem);
      &:not(:last-child):before {
        right: calc(var(--size--2) / 2 + 2px);
        left: auto;
      }
      .circle { 
        order: 1;
      }
    }
  }

.resource .name { 
  opacity: 0; 
  transition: opacity 0.2s ease-in-out;
  font-weight: 700;
}

.resource:has(:popover-open) .name,
.resource:hover .name { 
  z-index: 10;
  opacity: 1 !important; 
}



// isso aqui é para o efeito de fade-in/out dos recursos
.map-data:has(:popover-open) {
  .resource { opacity: .25;}
  .resource:has(:popover-open) { opacity: 1;}
}


#resource-lk,
#resource-bd,
#resource-nt {
  // isso aqui é para customizar os textos do SriLanka, Bangladesh e Nepal
  
  .name {
    left: unset;
    right: calc(var(--space-3xs) + var(--size-0));
  }

  // .resource__list li {
  //   grid-template-columns: 1fr var(--size--1);
  //   grid-template-areas: name circle;
  // }
  
}
</style>