<script setup>
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

const data = reactive({
  selectedCountry: props.activeCountry
})


const emit = defineEmits(['project-selected']);

const findPopover = (id) => {
  data.selectedCountry = data.selectedCountry === id ? '' : id
  emit('project-selected', data.selectedCountry)
}

const getPosition = (resource, key) => {
  const container = document.querySelector('#map-container svg g')
  const marker = document.querySelector(`#${key}-marker`);
  marker.classList.add('marker')

  const markerXY = {
    x: parseFloat(marker.querySelector('circle:last-of-type').getAttribute('cx')) + 8,
    y: parseFloat(marker.querySelector('circle:last-of-type').getAttribute('cy')) + 4
  }

  const newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
  newText.setAttributeNS(null, "x", markerXY.x);
  newText.setAttributeNS(null, "y", markerXY.y);
  newText.setAttributeNS(null, "width", "100%");
  newText.setAttributeNS(null, "height", "auto");
  newText.setAttributeNS(null, "font-size", "12");
  newText.setAttributeNS(null, "font-style", "normal");
  newText.setAttributeNS(null, "fill", "currentColor");
  newText.setAttributeNS(null, "style", `
    z-index: 1000;
    fill: var(--base-color);
    font-weight: 800;
    transition: opacity 0.2s ease-in-out;
    font-family: var(--font-body);
  `)

  newText.setAttributeNS(null, "display", "none")
  newText.appendChild(document.createTextNode(resource.name))

  container.append(newText)

  marker.addEventListener('mouseover', () => {
    newText.setAttributeNS(null, 'display', 'block')
  })

  marker.addEventListener('mouseleave', () => {
    newText.setAttributeNS(null, 'display', 'none')
  })

  marker.addEventListener('click', () => {
    findPopover(key)
  })
}

onMounted(() => {
  const keysOfResources = Object.keys(props.resources)

  keysOfResources.forEach((key) => {
    getPosition(props.resources[key], key)
  })
})

watch(() => props.activeCountry, (newValue) => {
  if (newValue) {
    const markers = document.querySelectorAll(`.marker`);

    markers.forEach(marker => {
      if (marker.getAttribute('id').includes(`${newValue}-marker`)) {
        marker.classList.add('active-marker')
      } else {
        marker.classList.remove('active-marker')
      }
    })
  } else {
    const markers = document.querySelectorAll(`.marker`);

    markers.forEach(marker => marker.classList.remove('active-marker'))
  }
})
</script>

<style lang="scss" scoped>
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

  border: 1px solid red;
  position-area: right;
  display: inline-block;
  width: var(--circle-width);
  height: var(--circle-height);
  transition: opacity 0.2s ease-in-out;
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

    &+li {
      margin-top: var(--space-3xs);
    }

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

    button {
      text-align: right;
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
  .resource {
    opacity: .25;
  }

  .resource:has(:popover-open) {
    opacity: 1;
  }
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