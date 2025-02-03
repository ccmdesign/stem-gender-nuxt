<template>
  <main>
    <header class="chapter-layout__header | chapter-header">
      <div class="repel">
        <LangSwitcher />

        <h3>Synthesis Report</h3>
      </div>

      <hgroup>
        <h1>
          <span>Breaking Barriers</span>
          <span>Building Bridges</span>
        </h1>

        <div class="chapter-header__extras">
          <a href="#" download>Podcast(AI)</a>
          <a href="#" download>Audio Version</a>
          <a href="#" download>Download PDF</a>
        </div>

        <h2 class="chapter-header__subtitle">A Southern-led research network to advance gender equality in STEM</h2>
      </hgroup>

      
      <ContentList :query="query" :key="'galleryList' + locale">
        <template #default="{ list }">
          <ul class="chapter-header__toc">
            <li v-for="article in list" :key="article._path">
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
    <ul>
      <h2>Resources</h2>
      <li v-for="resource in resources" :key="resource.name">
        <a :href="resource.url">{{ resource.name }}</a>
      </li>
    </ul>
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
console.log(query)

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


