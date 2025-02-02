
<template>
  <main>
    <ContentList :query="query" :key="'articleList' + locale">
      <template #default="{ list }">
        <ul>
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
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/articles')
}
console.log(query)
</script>