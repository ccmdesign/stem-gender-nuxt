<template>
  <main class="chapter-layout">
    <header class="chapter-layout__header | chapter-header">
      <div class="repel">
        <LangSwitcher />
        <h3>Synthesis Report</h3>
      </div>

      <chapter-titles />

      <ContentList :query="query" :key="'url' + locale">
        <template #default="{ list }">
          <ul class="chapter-header__toc">
            <li v-for="article in list.sort((a, b) => a.order - b.order)" :key="article._path">
              <NuxtLink :to="localePath(article._path)">{{ article.title }}
              </NuxtLink>
            </li>
          </ul>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
        <template #pending>
          <p>...</p>
        </template>
      </ContentList>
    </header>

    <div class="chapter-layout__content">
      <div class="map-grid">
        <div class="map-grid__map">
          <world-map />
        </div>
        <div class="map-grid__content">
          <ul class="resource-list | stack" role="list">
            <li v-for="(item, index) in resourcesByCountry" :key="index" >
              <details name="resource-list">
                <summary>{{ item.name }}</summary>
                <ul role="list">
                  <li v-for="(i, index) in item.resources" :key="index">
                    <button @click="toggleCard(index)">{{ i.name }}</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>

          <div v-for="(resource, index) in resources" :key="index">
            <resource-card v-if="activeIndex === index" :resource="resource" :isVisible="activeIndex === index" />
          </div>
        </div>  
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import { ref, onMounted } from 'vue'
import ResourceCard from '@/components/resourceCard.vue'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const { locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/articles')
}

const resources = ref([])
const resourcesByCountry = ref({})
const activeIndex = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/resources.json');
    resources.value = await response.json();

    console.log(resources.value)
    // Group resources by country code
    resourcesByCountry.value = resources.value.reduce((acc, resource) => {
      if (resource.region && resource.region_codes) {
        const countries = resource.region.split(', ');
        const codes = resource.region_codes;
        
        countries.forEach((country, index) => {
          // Skip empty or "NA" regions
          if (!country || country === "NA") return;
          
          const code = codes[index];
          if (!acc[code]) {
            acc[code] = {
              name: country,
              resources: []
            };
          }
          acc[code].resources.push(resource);
        });
      }
      return acc;
    }, {});
  } catch (error) {
    console.error('Erro ao carregar os recursos:', error);
  }
});

const toggleCard = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// const countryTest = computed(() => {
//   return {
//     "left": 537,
//     "top": 486,
//     "width": 33,
//     "height": 28
//   }
// })

// const getCountryCenter = computed(() => {
//   const country = countryTest.value
//   const center = {}
  
//   if (country.left && country.width) {
//     center.x = country.left + (country.width / 2)
//   } else {
//     center.x = 0
//   }

//   if (country.top && country.height) {
//     center.y = country.top + (country.height / 2)
//   } else {
//     center.y = 0
//   }

//   return center
// })

// console.log(getCountryCenter.value)


</script>


<style lang="scss" scoped>
.chapter-header h3 {
  font-size: var(--size--2);
}

.map-grid {
  position: relative;
}


.map-grid__map {
  position: relative;
}

.resource-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.test__circle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}
</style>
