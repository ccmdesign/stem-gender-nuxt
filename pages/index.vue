<template>
  <homepageLayout>

    <!-- Hero -->
    <template #hero>
      <homepage-hero class="hero">
        <template #topbar>
          <top-bar />
        </template>
        <template #headings>
          <p class="homepage-hero__brow">{{ $t('synthesisReport') }} | Beta</p>
          <h1 class="homepage-hero__title">{{ $t('breakingBarriers') }}</h1>
          <p class="homepage-hero__tagline">{{ $t('tagline') }}</p>
          <nuxt-link class="button homepage-hero__button" icon-after="arrow_downward" color="primary" visual="primary" to="#report">{{ $t('readReport') }}</nuxt-link>
        </template>

        <template #image>
          <img class="homepage-hero__image" src="/images/lessons-learned.jpg" alt="Lessons Learned" />
        </template>
      </homepage-hero>
    </template>
    
    <!-- Intro -->
    <template #intro>
      <intro-section class="intro">
        <template #left>
          <div class="stack">
            <h2>{{ $t('initiative.title') }}</h2>
            <p>{{ $t('initiative.p1') }}</p>
            <p>{{ $t('initiative.p2') }}</p>
            <p>{{ $t('initiative.p3') }}</p>
          </div>
        </template>
        <template #right>
          <div class="stack">
          <h3>{{ $t('initiative.aim.title') }}:</h3>
          <div class="research-grid">
            <p>{{ $t('initiative.aim.p1') }}</p>
            <p>{{ $t('initiative.aim.p2') }}</p>
            <p>{{ $t('initiative.aim.p3') }}</p>
            <p>{{ $t('initiative.aim.p4') }}</p>
          </div>
        </div>
        </template>
      </intro-section>
    </template>
    
    <!-- Report -->
    <template #report>
      <report-section class="report">
        
        <template #top-left>
          <h2>{{ $t('report.title') }}</h2>
        </template>
          
          <template #top-right>
            <nuxt-link class="button" color="primary" visual="secondary" to="#report">{{ $t('report.view') }}</nuxt-link>
            <nuxt-link class="button" color="primary" visual="secondary" to="#report">{{ $t('report.podcast') }}</nuxt-link>
          </template>

          <template #mobile>
            <ContentList :query="query" :key="'url' + locale" :path="`/${locale}/`">
              <template #default="{ list }">
                <ul class="report-list__mobile" role="list">
                  <li v-for="article in list.sort((a, b) => a.order - b.order)" :key="article._path">
                    <NuxtLink :to="locale !== 'en' ? localePath(article._path) : `/articles/${article.slug}`">
                      {{ article.title }}
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
        </template>
        <template #left>
          <div class="report-list__list">
            <ContentList :query="query" :key="'url' + locale" :path="`/${locale}/`">
              <template #default="{ list }">
                <ul class="report-list__toc" role="list">
                  <li class="report-list__item" 
                      :class="{'report-list__item--active': data.selectedChapter?.slug === article.slug}" 
                      v-for="article in list.sort((a, b) => a.order - b.order)" 
                      @click="data.selectedChapter = article" 
                      :key="article._path"
                      ref="listItems">
                    {{ article.title }}
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
          </div>
        </template>
        <template #right>
          <div class="report-list__content" v-if="data.selectedChapter && data.selectedChapter.title">
          <h3 class="report-list__title">{{ data.selectedChapter.title }}</h3>
          <p class="report-list__subtitle">{{ data.selectedChapter.description }}</p>
          <NuxtLink class="report__button | button" color="primary" visual="primary" v-if="locale !== 'en'" :to="localePath(data.selectedChapter._path)">{{ $t('readChapter') }}</NuxtLink>
          <NuxtLink class="report__button | button" color="primary" visual="primary" v-else :to="`/articles/${data.selectedChapter.slug}`">{{ $t('readChapter')  }}</NuxtLink>
      </div>
        </template>
      </report-section>
    </template>
    
    <!-- Map Grid -->
    <template #map-grid>
      <map-section>
        <template #map>
          <world-map class="map" />
          <map-data class="data" :resources="resources" :activeCountry="data.selectedCountry" @project-selected="handleProjectSelected" />
        </template>
        <template #cards>
          <resource-list :resources="data.resourceList" />
        </template>
      </map-section>
    </template>

    <!-- Challenge -->
    <template #challenge>
      <twin-section class="challenge">
        <template #left>
          <img class="challenge__image" src="/images/conclusion.jpg" alt="Conclusion" />
        </template>
        <template #right>
          <div class="stack">
            <h2>{{ $t('challenge.title') }}</h2>
            <p>{{ $t('challenge.p1') }}</p>
            <p><a href="https://unesdoc.unesco.org/ark:/48223/pf0000375429" target="_blank">{{ $t('challenge.link') }}</a>{{ $t('challenge.p2') }}</p>
            <p>{{ $t('challenge.p3') }}</p>
          </div>
        </template>
      </twin-section>
    </template>

    <!-- Sign Up -->
    <template #sign-up>
      <signup-section />
    </template>

    <!-- Footer -->
    <template #footer>
      <footer-section />
    </template>
  </homepageLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import resourcesByCountry from '~/public/resourcesByCountry.json'
import { userResourcesFilter } from '~/composables/resourcesFilter'

const { locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/')
}

const resources = ref(resourcesByCountry)

// Primeiro, vamos definir as interfaces necessárias
interface Resource {
  name: string;
  select: string;
  project_type: string;
  region: string;
  region_codes: string[];
  funding: number;
  status: string;
  programs: string;
  url: string;
}

interface Country {
  name: string;
  resources: Resource[];
  position: {
    x: string;
    y: string;
  };
}

// Agora vamos corrigir a definição do resourceFullList
const resourceFullList = Object.values(resources.value).reduce<Resource[]>((acc, country: Country) => {
  country.resources.forEach((resource: Resource) => {
    const exists = acc.some((r: Resource) => r.name === resource.name);
    if (!exists) {
      acc.push(resource);
    }
  });
  return acc;
}, []).sort((a: Resource, b: Resource) => a.name.localeCompare(b.name));

const activeCountry = ref<string | null>(null);
const activeProjectIndex = ref<number | null>(null);
const data = reactive({
  selectedCountry: '',
  selectedChapter: {},
  resourceList: resourceFullList
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

// Primeiro, vamos criar uma ref para a lista filtrada
const filteredResourceList = ref<Resource[]>(resourceFullList);

// Agora vamos adicionar o watcher
watch(() => data.selectedCountry, (newCountry) => {
  if (!newCountry) {
    // Se não houver país selecionado, mostra a lista completa
    filteredResourceList.value = resourceFullList;
  } else {
    // Filtra os recursos pelo país selecionado
    filteredResourceList.value = resourceFullList.filter(resource => 
      resource.region_codes.includes(newCountry)
    );
  }
}, { immediate: true });

// Atualiza o data.resourceList para usar a lista filtrada
watch(filteredResourceList, (newList) => {
  data.resourceList = newList;
}, { immediate: true });

onMounted(async () => {
  document.addEventListener('click', handleClickOutside);
  document.querySelectorAll('.report-list__item')[0].click();
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
h2 {
  font-size: var(--size-2);
  font-weight: 600;
}


.hero .button {
  font-weight: 500;
  font-size: var(--size-0);
}





.challenge {
  padding: var(--space-3xl) var(--space-m) var(--space-xl) ;
  display: flex;
  gap: var(--space-2xl-3xl);
  align-items: center;
  background-color: var(--base-color-02-tint);
  border-top: 1px solid var(--base-color-10-tint);
}

  .challenge__image {
    aspect-ratio: 1;
    object-fit: cover;
  }


</style>
