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
        <article v-if="getNextDoc(doc.order)" class="next-article">
          <div class="next-article__content">
            <p class="next-article__cta">Read next</p>
            <NuxtLink class="next-article__link" :to="localePath(getNextDoc(doc.order)._path)">
              {{ getNextDoc(doc.order).title }}
            </NuxtLink>
          </div>
        </article>
      </template>
      <template #not-found>
        <h1>Error</h1>
        <button @click="$router.push(localePath('/articles'))">Back</button>
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
      justify-content: center;
      color: var(--primary-color);
      align-items: center;
    }

    .next-article__cta {
      font-size: var(--size-3);
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