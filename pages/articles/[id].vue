<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const route = useRoute()
const localePath = useLocalePath()

const { data: docs } = await useAsyncData('articles', () =>
  queryContent('articles').sort({ order: 1 }).find()
)

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
    <ContentDoc :path="localePath(route.path)">
      <template v-slot="{ doc }">
        <article class="article-layout">
          
          <chapter-hero 
            class="article-layout__hero"
            :heading="doc.title"
            :tagline="doc.description"
            :brow="doc.brow"
            :image="doc.image">
          </chapter-hero>

          <section class="article-layout__content">
            <ContentRenderer :value="doc" class="post-layout | region prose" />
          </section>
        </article>
        <article class="next-article">
          <div class="next-article__content">
            <div class="next-article__item" v-if="getPrevDoc(doc.order)">
              <p class="next-article__cta">{{ $t('previousArticle') }}</p>
              <NuxtLink class="next-article__link" :to="localePath(getPrevDoc(doc.order)._path)">
                {{ getPrevDoc(doc.order).title }}
              </NuxtLink>
            </div>
            <div class="next-article__item" v-else></div>

            <div class="next-article__item next-article__item--right" v-if="getNextDoc(doc.order)">
              <p class="next-article__cta">{{ $t('readNext') }}</p>
              <NuxtLink class="next-article__link" :to="localePath(getNextDoc(doc.order)._path)">
                {{ getNextDoc(doc.order).title }}
              </NuxtLink>
            </div>
            <div class="next-article__item next-article__item--right" v-else></div>
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
</style>