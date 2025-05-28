<template>
  <div class="top-bar | cluster">
    <h1>Breaking barriers, Building bridges</h1>
    <img class="idrc-logo" src="assets/idrc-logo.png" alt="IDRC Logo" />

    <div class="top-bar__languages">
      <nuxtLink class="button" size="s" color="primary" visual="ghost" :to="localePath('/')" @click="setLocale('en')">EN</nuxtLink>
      <nuxtLink class="button" size="s" color="primary" visual="ghost" :to="localePath('/fr')" @click="setLocale('fr')">FR</nuxtLink>
      <nuxtLink class="button" size="s" color="primary" visual="ghost" :to="localePath('/es')" @click="setLocale('es')">ES</nuxtLink>
    </div>

    <div class="top-bar__chapters" split>
      <a href="#report" class="chapter-button | button" size="s" color="primary" visual="ghost"  @click="setLocale('en')">
        <span>Chapters</span>
        <span class="icon">menu</span>
      </a>
      
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const setLocale = (locale) => {
  locale.value = locale
}
</script>

<style lang="scss" scoped>
.top-bar {
  padding: var(--space-xs-s) var(--space-s-m);
  background-color: var(--white-color);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

h1 {
  max-width: 20ch;
  line-height: 1.2;
  font-size: var(--size-2xl);
  font-weight: 800;
  color: var(--black-color) !important;
}

.idrc-logo {
  width: 100px;
  height: auto;
}

.top-bar__languages {
  border-left: 1px solid var(--base-color-10-tint);
  padding-left: var(--space-s-m);

  @media (max-width: 768px) {
    display: none;
  }
}


.chapter-button {
  color: var(--primary-color) !important;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    span:not(.icon) {
      display: none;
    }
  }
}

.icon {
  font-size: var(--size-0);
  margin-left: var(--space-xs);
  font-family: var(--icon-font);
  padding: var(--space-2xs);
  border-radius: 200px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--white-color);
}


</style>