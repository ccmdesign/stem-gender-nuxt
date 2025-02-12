<template>
    <ContentList :query="query" :key="'url' + locale">
        <template #default="{ list }">
            <ul class="chapter-list" role="list">
                <li class="chapter-list__item" v-for="article in list.sort((a, b) => a.order - b.order)" :key="article._path">
                    <NuxtLink class="chapter-list__link" :to="localePath(article._path)">{{ article.title }}</NuxtLink>
                </li>
            </ul>
        </template>
    </ContentList>
  </template>
  
  <script setup lang="ts">
    import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

    const { locale } = useI18n()
    const localePath = useLocalePath()
    const query: QueryBuilderParams = {
        path: localePath('/')
    }
  </script>
  
  <style lang="scss" scoped>
    .chapter-list {
        width: 100%;
        margin: 0;
        padding: 0;
        border-top: 1px solid var(--white-color-10-alpha);
    }

        .chapter-list__item {
            margin: 0;
            border-bottom: 1px solid var(--white-color-10-alpha);
        }

        .chapter-list__link {
            width: 100%;
            text-align: right;
            display: block;
            text-decoration: none;
            color: var(--secondary-color);
            font-size: 0.75em;
            font-weight: 200;
            padding-block: var(--space-2xs);
            &:hover,
            &:active {
                text-decoration: underline;
            }
            @media screen and (max-width: 800px) {
                text-align: left;
            }
        }
  </style>