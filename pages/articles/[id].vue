<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
const route = useRoute()
const localePath = useLocalePath()
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
      </template>
      <template #not-found>
        <h1>Error</h1>
        <button @click="$router.push(localePath('/articles'))">Back</button>
      </template>
    </ContentDoc>
    <chapterFooter />
  </main>
</template>

<style>




/* article {
  display: none;
} */


</style>