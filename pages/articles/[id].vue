<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
</script>

<template>
  <main>
    <ContentDoc :path="localePath(route.path)">
      <template v-slot="{ doc }">
        <article>
          <header>
            <h1>{{ doc.title }}</h1>
            <h2>{{ doc.description }}</h2>
          </header>
          <section class="content">
            <ContentRenderer :value="doc" />
          </section>
        </article>
      </template>
      <template #not-found>
        <h1>Error</h1>
        <button @click="$router.push(localePath('/articles'))">Back</button>
      </template>
    </ContentDoc>
  </main>
</template>
