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
            <li v-for="article in list.sort((a,b) => a.order - b.order)" :key="article._path">
              <NuxtLink :to="localePath(article._path)"
                >{{ article.title }}
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
      <div class="map-grid" >
        <div class="map-grid__map">
          <world-map />
        </div>
        <div class="map-grid__content">
          <resource-card />
        </div>
      </div>

      <ul class="display:none">
        <h2>Resources</h2>
        <li v-for="resource in resources" :key="resource.name">
          <a :href="resource.url" target="_blank">{{ resource.name }}</a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const { locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/articles')
}

const resources = ref([])

// @TODO: Não consegui importar o arquivo resources.json para cada idioma

onMounted(async () => {
  try {
    const data = await import(`/content/resources.json`)
    resources.value = data.default
  } catch (error) {
    console.error('Error loading resources:', error)
  }
})


</script>


<style lang="scss" scoped>
.chapter-header h3 {
  font-size: var(--size--2);
}
</style>
