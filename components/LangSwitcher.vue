<template>
    <div class="language-switcher">
      <button v-for="item in locales" :key="item.code" :aria-selected="locale === item.code" @click="setLocale(item.code)">{{ item.code }}</button>
    </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()
</script>

<style scoped>
.language-switcher button {
  padding-inline: var(--space-3xs);
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
}

.language-switcher button[aria-selected="true"] {
  font-weight: bold;
}
</style>