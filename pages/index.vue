<template>
  <main class="chapter-layout"
    @click="handleClickOutside">
    <header class="chapter-layout__header | index-header">
      <div class="stack">
        <p class="index-header__brow">{{ $t('synthesisReport') }} | Beta</p>
        <h1 class="index-header__title">{{ $t('breakingBarriers') }}</h1>
        <p class="index-header__tagline">{{ $t('tagline') }}</p>
        <nuxt-link class="button index-header__button"
          icon-after="arrow_downward"
          color="primary"
          visual="primary"
          to="#report">{{ $t('readReport') }}</nuxt-link>
      </div>
      <div class="index-header__image"
        aria-hidden="true" />
    </header>
    <section class="initiative">
      <div class="stack">
        <h2>{{ $t('initiative.title') }}</h2>
        <p>{{ $t('initiative.p1') }}</p>
        <p>{{ $t('initiative.p2') }}</p>
        <p>{{ $t('initiative.p3') }}</p>
      </div>
      <div class="stack">
        <h3>{{ $t('initiative.aim.title') }}:</h3>
        <div class="research-grid">
          <p>{{ $t('initiative.aim.p1') }}</p>
          <p>{{ $t('initiative.aim.p2') }}</p>
          <p>{{ $t('initiative.aim.p3') }}</p>
          <p>{{ $t('initiative.aim.p4') }}</p>
        </div>
      </div>
    </section>
    <section class="report">
      <div class="repel">
        <h2>{{ $t('report.title') }}</h2>
        <div class="flex flex---1">
          <nuxt-link class="button report__button"
            color="primary"
            visual="secondary"
            to="#report">{{ $t('report.view') }}</nuxt-link>
          <nuxt-link class="button report__button"
            color="primary"
            visual="secondary"
            to="#report">{{ $t('report.podcast') }}</nuxt-link>
        </div>
      </div>
    </section>
    <section id="report"
      class="report-list">
      <div class="report-list__list">
        <ContentList :key="'url' + locale"
          :query="query"
          :path="`/${locale}/`">
          <template #default="{ list }">
            <ul class="report-list__toc"
              role="list">
              <li v-for="article in list.sort((a, b) => a.order - b.order)"
                :key="article._path"
                class="report-list__item"
                :class="{ 'report-list__item--active': data.selectedChapter.slug == article.slug }"
                @click="data.selectedChapter = article">
                {{ article.title }}
              </li>
            </ul>
          </template>

          <!-- Hero -->
          <template #hero>
            <homepage-hero>
              <template #topbar>
                <top-bar />
              </template>
              <template #headings>
                <p class="homepage-hero__brow">{{ $t('synthesisReport') }} | Beta</p>
                <h1 class="homepage-hero__title">{{ $t('breakingBarriers') }}</h1>
                <p class="homepage-hero__tagline">{{ $t('tagline') }}</p>
                <nuxt-link class="button homepage-hero__button"
                  icon-after="arrow_downward"
                  color="primary"
                  visual="primary"
                  to="#report">{{ $t('readReport') }}</nuxt-link>
              </template>

              <template #image>
                <img class="homepage-hero__image"
                  src="/images/lessons-learned.jpg"
                  alt="Lessons Learned">
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
            </report-section></template>
        </ContentList>
      </div>
      <span class="report-list__spacer" />
      <div v-if="data.selectedChapter && data.selectedChapter.title"
        class="report-list__content">
        <h3 class="report-list__title">{{ data.selectedChapter.title }}</h3>
        <p class="report-list__subtitle">{{ data.selectedChapter.description }}</p>
        <NuxtLink v-if="locale !== 'en'"
          class="button index-header__button"
          color="primary"
          visual="primary"
          :to="localePath(data.selectedChapter._path)">{{ $t('readChapter') }}</NuxtLink>
        <NuxtLink v-else
          class="button index-header__button"
          color="primary"
          visual="primary"
          :to="`/articles/${data.selectedChapter.slug}`">{{ $t('readChapter') }}</NuxtLink>
      </div>
    </section>
    <section class="map-grid">
      <!--<div class="map-grid__summary | project-summary">
            <h3><span>15</span> {{ $t('globalProjects') }}</h3>
            <p><a href="https://idrc-crdi.ca/en/initiative/gender-stem" target="_blank">Breaking Barriers Network</a></p>
        </div>-->
      <div class="map-grid__map">
        <ClientOnly fallback-tag="span"
          fallback="Loading...">
          <map-data class="data"
            :resources="resources"
            :active-country="data.selectedCountry"
            @project-selected="handleProjectSelected" />
        </ClientOnly>
        <world-map class="map" />
      </div>
      <div class="map-grid__content">
        <resource-list :resources="data.resourceList" />
      </div>
    </section>
    <section class="challenge">
      <div class="challenge__image" />
      <div class="stack">
        <h2>{{ $t('challenge.title') }}</h2>
        <p>{{ $t('challenge.p1') }}</p>
        <p><a href="https://unesdoc.unesco.org/ark:/48223/pf0000375429"
            target="_blank">{{ $t('challenge.link') }}</a>{{
              $t('challenge.p2') }}</p>
        <p>{{ $t('challenge.p3') }}</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import resourcesByCountry from '~/public/resourcesByCountry.json'
import { userResourcesFilter } from '~/composables/resourcesFilter'
definePageMeta({
  layout: 'default'
})

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
  if (data.selectedCountry != id) {
    const trigger = document.querySelector(`#trigger-${id}`);
    if (trigger) {
      trigger.click();
    }
    data.selectedCountry = id
  } else {
    const trigger = document.querySelector(`.map-grid__map`);
    if (trigger) {
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

.index-header {
  position: relative;
  background: linear-gradient(88.42deg, #7F2A28 1.35%, #A63330 98.65%);
  padding: var(--space-3xl-4xl) var(--size-2) var(--size-2) var(--size-2);

  &>* {
    position: relative;
    z-index: 1;
    color: var(--white-color);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/images/pattern.webp);
    background-size: cover;
    background-position: center;
  }

  .stack {
    max-width: 720px;
    --stack-space: var(--space-m-l)
  }
}

.index-header__button {
  color: var(--white-color);
}

.index-header__brow {
  text-transform: uppercase;
  font-size: var(--size--1);
  font-weight: 500;
}

.index-header__title {
  font-size: var(--size-6);
  font-weight: 600;
}

.index-header__tagline {
  font-size: var(--size-0);
  font-weight: 400;
  max-width: 400px;
}

.index-header__image {
  position: absolute;
  top: var(--space-l-xl);
  right: var(--size-2);
  left: 50%;
  bottom: 0;
  z-index: 0;
  background-image: url(/images/lessons-learned.jpg);
  background-size: cover;
  background-position: center;
  transform: translateY(var(--space-2xl-3xl));
  box-shadow: 6px 5px 17px 0px hsla(0, 0%, 0%, 0.16);
}

.initiative {
  padding: var(--space-xl-2xl) var(--size-2) var(--size-2) var(--size-2);
  display: grid;
  grid-template-columns: auto 50%;
  gap: var(--space-2xl-3xl);
  align-items: flex-end;

  p {
    font-size: var(--size-0);
    font-weight: 400;
  }

  h3 {
    text-transform: uppercase;
    font-size: var(--size-0);
    font-weight: 600;
    color: var(--primary-color);
  }
}

.research-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xs);

  p {
    padding: var(--space-m);
    font-size: var(--size-0);
    font-weight: 400;
    background-color: var(--black-color-05-alpha);
  }
}



.report__button {
  border-width: 1px;
  color: var(--base-color);
}

.report-list {
  display: grid;
  grid-template-columns: 40% 2px auto;
  position: relative;
  z-index: 1;
}

.report-list__toc {
  .report-list__item {
    padding-inline: var(--space-m) var(--space-l);
    padding-block: var(--space-s);
    cursor: pointer;
    font-size: var(--size-0);
  }

  .report-list__item--active {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
}

.report-list__spacer {
  background-image: linear-gradient(360deg, rgba(228, 228, 231, 0) 0%, rgba(228, 228, 231, 0.5) 15%, #E4E4E7 85%, rgba(228, 228, 231, 0) 100%);
}

.report-list__content {
  padding-inline: var(--space-2xl) var(--space-m);
  display: flex;
  gap: var(--space-xl);
  flex-direction: column;
  justify-content: center;
}

.report-list__title {
  font-size: var(--size-4);
  color: var(--primary-color);
}

.report-list__subtitle {
  font-size: var(--space-0);
}

.challenge {
  padding: var(--space-3xl) var(--space-m) var(--space-xl);
  display: flex;
  gap: var(--space-2xl-3xl);
  align-items: center;
  background-color: var(--base-color-02-tint);
  border-top: 1px solid var(--base-color-10-tint);
}

.challenge__image {
  width: 100%;
  max-width: 500px;
  height: 544px;
  flex-shrink: 0;
  background-image: url(/images/conclusion.jpg);
  background-size: cover;
  background-position: center;
}


.map-grid__map {
  position: relative;
  height: min-content;
}

.map-grid__content {
  position: relative;
  z-index: 10;
}

.map-grid__idrc-logo,
.map-grid__summary {
  box-shadow:
    rgba(0, 0, 0, 0.03) 0px 7px 4px -4px,
    rgba(0, 0, 0, 0.03) 0px 4px 4px -4px,
    rgba(0, 0, 0, 0.03) 0px 8px 8px -8px,
    rgba(0, 0, 0, 0.035) 0px 16px 16px -16px;

  background-color: var(--white-color);
  z-index: 1;

}

.map-grid__summary {
  a {
    color: var(--primary-color);
    font-size: var(--size-1);
    font-weight: 500;
  }
}

.idrc-logo,
.map-grid__idrc-logo {
  max-width: 180px;
  padding: var(--space-s);
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
  width: 100%;
  height: 100%;
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

    * {
      display: inline-block;
    }
  }

  &[open] summary::marker {
    content: '- ' !important;
  }
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

  h3 {
    font-size: var(--size-1);
  }

  span {
    font-size: var(--size-2);
    font-weight: 800;
    letter-spacing: .5px;
    font-family: var(--font-display);
    color: var(--primary-color);
  }
}
</style>
