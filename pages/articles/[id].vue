<script setup lang="ts">
<<<<<<< HEAD
import BgImage from '~/components/bgImage.vue'
import DropcapComponent from '~/components/dropcapComponent.vue'
import HeaderGroup from '~/components/headerGroup.vue'
import HeaderStart from '~/components/HeaderStart.vue'


=======
>>>>>>> 3cb254b1375e4495ae80e978ceb4a64c11b5ea95
definePageMeta({
  layout: 'default'
})
const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const components = {
  'header-start': HeaderStart,
  'bg-image': BgImage,
  'dropcap': DropcapComponent,
  'hgroup': HeaderGroup
}

const { data: docs } = await useAsyncData('articles', () =>
  queryContent('articles').sort({ order: 1 }).find()
)

const chapter = await queryContent(locale.value, 'articles').where({
  slug: route.params.id
}).findOne();


function getNextDoc(currentOrder: number) {
  if (!docs.value) return null
  const sortedDocs = docs.value
  const currentIndex = sortedDocs.findIndex(d => d.order === currentOrder)
  return currentIndex !== -1 ? sortedDocs[currentIndex + 1] || null : null
}

function getPrevDoc(currentOrder: number) {
  if (!docs.value) return null
  const sortedDocs = docs.value
  const currentIndex = sortedDocs.findIndex(d => d.order === currentOrder)
  return currentIndex !== 0 ? sortedDocs[currentIndex - 1] || null : null
}
</script>

<template>
  <main>
    <div class="article-links">
      <div class="wrapper">
        <div class="article-links__content">
          <backLink />
          <span class="separator not-mobile" />
          <div class="article-links__title">{{ $t('chapter') }} {{ chapter.order }} / <b>{{ chapter.title }}</b></div>
          <span class="separator not-mobile" />
          <nextLink v-if="getNextDoc(chapter.order)"
            class="not-mobile"
            :url="localePath(`/articles/${getNextDoc(chapter.order).slug}`)" />
        </div>
      </div>
    </div>
    <ContentDoc :path="localePath(route.path)">
      <template #default="{ doc }">
        <article class="article-layout">

          <chapter-hero class="article-layout__hero"
            :heading="doc.title"
            :tagline="doc.description"
            :brow="doc.brow"
            :image="doc.image" />


          <section class="article-layout__content">
            <div class="post-layout">
              <ArticleAudio v-if="doc.audio"
                :src="`/${doc.audio.replace(/^\/+/, '')}`" />
            </div>
            <ContentRenderer :value="doc"
              :components
              class="post-layout | region prose" />
          </section>
        </article>
        <article class="next-article">
          <div class="next-article__content">
            <div v-if="getPrevDoc(doc.order)"
              class="next-article__item">
              <p class="next-article__cta">{{ $t('previousArticle') }}</p>
              <NuxtLink class="next-article__link"
                :to="localePath(getPrevDoc(doc.order)._path)">
                {{ getPrevDoc(doc.order).title }}
              </NuxtLink>
            </div>
            <div v-else
              class="next-article__item" />

            <div v-if="getNextDoc(doc.order)"
              class="next-article__item next-article__item--right">
              <p class="next-article__cta">{{ $t('readNext') }}</p>
              <NuxtLink class="next-article__link"
                :to="localePath(getNextDoc(doc.order)._path)">
                {{ getNextDoc(doc.order).title }}
              </NuxtLink>
            </div>
            <div v-else
              class="next-article__item next-article__item--right" />
          </div>
        </article>
      </template>
      <template #not-found>
        <h1>{{ $t('error') }}</h1>
        <button @click="$router.push(localePath('/'))">{{ $t('back') }}</button>
      </template>
    </ContentDoc>
    <chapterFooter />
  </main>
</template>

<style lang="scss" scoped>
.not-mobile {
  @media (max-width: 768px) {
    display: none;
  }
}

.article-header {
  --bd-color: hsla(240, 5%, 90%, 1);
  border-top: 1px solid var(--bd-color);
  border-bottom: 1px solid var(--bd-color);
  backdrop-filter: blur(16px);
}

.article-links__content {
  display: flex;
  flex-flow: column nowrap;
  gap: var(--space-s);
  padding-block: var(--space-m);

  .separator {
    --bd-color: hsla(240, 5%, 90%, 1);
    width: 1px;
    height: var(--size-4);
    background: var(--bd-color);
  }

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--space-s);
    padding-block: 0;

    &>* {
      align-self: center;
    }
  }
}

.article-links__title {
  color: var(--base-color-90-tint);
  flex-grow: 1;
}

.next-article {
  background-color: var(--secondary-color);
  padding: var(--space-l-xl) var(--space-s-m);
}

.next-article__content {
  display: flex;
  flex-direction: row;
  gap: var(--space-xl);
  justify-content: space-between;
  color: var(--primary-color);
  align-items: center;
}

.next-article__item {
  text-wrap: balance;
}

.next-article__item--right {
  text-align: right;
}

.next-article__cta {
  font-size: var(--size-1);
  text-transform: uppercase;
  font-weight: 400;
  font-family: var(--font-title);
}

.next-article__link {
  font-family: var(--font-display);
  text-wrap: balance;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.audio-center {
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem 0;
}
</style>