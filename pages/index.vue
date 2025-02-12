<template>
  <main class="chapter-layout" @click="handleClickOutside">
    <header class="chapter-layout__header | chapter-header">
      <div class="repel">
        <LangSwitcher />
        <h3>{{ $t('synthesisReport') }}</h3>
      </div>

      <chapter-titles />

      <ContentList :query="query" :key="'url' + locale" :path="`/${locale}/`">
        <template #default="{ list }">
          <ul class="chapter-header__toc" role="list">
            <li v-for="article in list.sort((a, b) => a.order - b.order)" :key="article._path">
              <NuxtLink v-if="locale !== 'en'" :to="localePath(article._path)">{{ article.title }}
              </NuxtLink>
              <NuxtLink v-else :to="`/articles/${article.slug}`">{{ article.title }}
              </NuxtLink>
            </li>
          </ul>
        </template>

        <template #not-found>
          <p>{{ $t('noArticlesFound') }}</p>
        </template>

        <template #pending>
          <p>...</p>
        </template>
      </ContentList>
    </header>

    <div class="chapter-layout__content">
      <div class="map-grid">
        <img src="/images/idrc-logo-full.png" alt="IDRC" class="map-grid__idrc-logo">
        <div class="map-grid__summary | project-summary">
            <h3><span>15</span> {{ $t('globalProjects') }}</h3>
            <h3><span>14</span> {{ $t('subSaharanAfricaProjects') }}</h3>
        </div>
        <div class="map-grid__map">
          <world-map class="map" />
          <map-data class="data" :resources="resources" :activeCountry="data.selectedCountry" @project-selected="handleProjectSelected" />
        </div>
        <div class="map-grid__content">          
          <details class="country-list">
            <summary>
              <h4>{{ $t('countries') }}</h4>
            </summary>
            <div class="cluster">
              <button v-for="(i, key) in resources" class="country-button" :class="{'country-button--active': data.selectedCountry == key}" @click="activateCountry(key)">{{ i.name }}</button>
            </div>
          </details>
          

          <resource-list :resources="resources" />
          <resource-card v-if="activeCountry && activeProjectIndex !== null"
            :resource="resources[activeCountry].resources[activeProjectIndex]" />
        </div>
      </div>

      <div class="mobile-resource-cards | stack">
        <div class="repel">
          <h3>{{ $t('resources') }}</h3>
          <img src="/images/idrc-logo-full.png" alt="IDRC" class="idrc-logo">
        </div>
        

        <resource-card v-for="resource in allResources" :key="resource.name" :resource="resource" />
      </div>

    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import { ref, onMounted, onUnmounted } from 'vue'
import ResourceCard from '@/components/resourceCard.vue'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import allResources from '~/public/resources.json'

const { locale, fallbackLocale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/')
}

const resources = ref([])
const activeCountry = ref<string | null>(null);
const activeProjectIndex = ref<number | null>(null);
const data = reactive({
  selectedCountry: ''
})

const handleProjectSelected = ({ countryCode, projectIndex }) => {
  activeCountry.value = countryCode;
  activeProjectIndex.value = projectIndex;
};

const handleClickOutside = (event: MouseEvent) => {
  // Check if the click was outside of any resource button
  const isResourceButton = event.target.closest('.resource button');
  if (!isResourceButton) {
    activeCountry.value = null;
    activeProjectIndex.value = null;
  }
};

const activateCountry = (id) => {
  if(data.selectedCountry != id) {
    const trigger = document.querySelector(`#trigger-${id}`);
    if(trigger) {
      trigger.click();
    }
    data.selectedCountry = id
  } else {
    const trigger = document.querySelector(`.map-grid__map`);
    if(trigger) {
      trigger.click();
    }
    data.selectedCountry = ''
  }
}

onMounted(async () => {
  document.addEventListener('click', handleClickOutside);
  try {
    const response = await fetch('/resourcesByCountry.json');
    resources.value = await response.json();
  } catch (error) {
    console.error('Erro ao carregar os recursos:', error);
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.chapter-header h3 {
  font-size: var(--size-1);
}

.map-grid {
  @media (max-width: 768px) {
    display: none;
  }
}

.map-grid__map {
  position: relative;
  height: min-content;
}

.map-grid__content {
  position: relative;
  z-index: 10;
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

.mobile-resource-cards {
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: var(--space-s);
  }

  .repel {
    align-items: flex-end;
  }
}

.country-list {
  --_cluster-space: var(--space-2xs);
  padding-block: var(--space-s);

  summary {
    padding-block: var(--space-2xs);
    &::marker {
      color: var(--primary-color);
      content: '+ ';
      font-size: 1.65rem;
    }
    
    * { display: inline-block; }
  }
  &[open] summary::marker { content: '- ' !important; }
}

.country-button {
  color: var(--primary-color);
  font-size: var(--size--1);
}

  .country-button--active {
    font-weight: 500;
  }

.project-summary {
  padding-inline: var(--space-s-m);
  display: flex;
  gap: var(--space-m);
  align-items: center;
  justify-content: center;

  h3 {font-size: var(--size-1);}
  span {
    font-size: var(--size-2);
    font-weight: 800;
    letter-spacing: .5px;
    font-family: var(--font-display);
    color: var(--primary-color);
  }
}
</style>
