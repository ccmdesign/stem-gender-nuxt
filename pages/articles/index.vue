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
          <world-map class="map" />
          <map-data class="data" :resources="resources" />
        </div>
        <div class="map-grid__content">
          <resource-list :resources="resources" />
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
const activeIndex = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/resourcesByCountry.json');
    resources.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar os recursos:', error);
  }
});

const toggleCard = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>


<style lang="scss" scoped>
.chapter-header h3 {
  font-size: var(--size--2);
}



.resource-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.map-grid {
}

.map-grid__map {
  position: relative;
  height: min-content;
}

.map {
  height: auto;
}

.data {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
