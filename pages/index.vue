<template>
  <main class="chapter-layout" @click="handleClickOutside">
    <header class="chapter-layout__header | index-header">
      <div class="stack">
        <p class="index-header__brow">{{ $t('synthesisReport') }} | Beta</p>
        <h1 class="index-header__title">{{ $t('breakingBarriers') }}</h1>
        <p class="index-header__tagline">{{ $t('tagline') }}</p>
        <nuxt-link class="button index-header__button" icon-after="arrow_downward" color="primary" visual="primary" to="#report">{{ $t('readReport') }}</nuxt-link>
      </div>
      <div class="index-header__image" aria-hidden="true"></div>
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
          <nuxt-link class="button report__button" icon-after="arrow_downward" color="primary" visual="secondary" to="#report">{{ $t('report.view') }}</nuxt-link>
          <nuxt-link class="button report__button" icon-after="arrow_downward" color="primary" visual="secondary" to="#report">{{ $t('report.podcast') }}</nuxt-link>
        </div>
      </div>
    </section>
    <section class="report-list">
      <div class="report-list__list">
        <ContentList :query="query" :key="'url' + locale" :path="`/${locale}/`">
          <template #default="{ list }">
            <ul class="report-list__toc" role="list">
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
      </div>
      <span class="report-list__spacer"></span>
    </section>
    <!--<header class="chapter-layout__header | chapter-header">
      <div class="repel">
        <LangSwitcher />
        <h3>
          {{ $t('synthesisReport') }} | Beta
        </h3>
        
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
        <a class="map-grid__idrc-logo" href="https://www.idrc-crdi.ca/en"><img src="/images/idrc-logo-full.png" alt="IDRC" ></a>
        <div class="map-grid__summary | project-summary">
            <h3><span>15</span> {{ $t('globalProjects') }}</h3>
            <p><a href="https://idrc-crdi.ca/en/initiative/gender-stem" target="_blank">Breaking Barriers Network</a></p>
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
        
        <resource-card v-for="item in resourceCardContent" :key="item.name" :resource="item" />
      </div>

    </div>-->
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import { ref, onMounted, onUnmounted } from 'vue'
import ResourceCard from '@/components/resourceCard.vue'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import resourcesByCountry from '~/public/resourcesByCountry.json'
import { userResourcesFilter } from '~/composables/resourcesFilter'

const { locale } = useI18n()
const localePath = useLocalePath()
const query: QueryBuilderParams = {
  path: localePath('/')
}

const resources = ref(resourcesByCountry)
const resourceCardContent = userResourcesFilter(resourcesByCountry)

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
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.button {
  font-weight: 500;
  font-size: var(--size-0);
}

h2 {
  font-size: var(--size-2);
  font-weight: 600;
}

.index-header {
  position: relative;
  background: linear-gradient(88.42deg, #7F2A28 1.35%, #A63330 98.65%);
  padding: var(--space-3xl-4xl) var(--size-2) var(--size-2) var(--size-2);
  & > * {
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
  .index-header__button  {
    color: var(--white-color);
  }
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


.report {
  padding: var(--space-xl) var(--size-2) var(--size-2) var(--size-2);
}

  .report__button {
    border-width: 1px;
    color: var(--base-color);
  }

  .report-list {
    display: grid;
    grid-template-columns: 40% 2px auto;
  }

    .report-list__list {
    }

    .report-list__spacer {
      background-image: linear-gradient(360deg, rgba(228, 228, 231, 0) 0%, rgba(228, 228, 231, 0.5) 15%, #E4E4E7 85%, rgba(228, 228, 231, 0) 100%);
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
