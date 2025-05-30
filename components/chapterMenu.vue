<template>
  <div class="chapter-menu">
      <div class="report-list__list">
          <ul class="report-list__toc" role="list">
            <li class="report-list__item" @click="toArticle(article)"  
                v-for="(article, index) in articles.sort((a, b) => a.order - b.order)" 
                :key="article._path"
                ref="listItems">
                <span>0{{ index+1 }}</span>
                <div class="report-list__item-content">
                  <h2>{{ article.title }}</h2>
                  <p v-if="article.slug !=='references'">{{ article.description }}</p>
                </div>
            </li>
          </ul>
      </div>

  </div>
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const articles = await queryContent(locale.value, 'articles').find()

const toArticle = (article) => {
  if(locale.value !== 'en') {
    navigateTo(localePath(article._path))
  } else {
    navigateTo(`/articles/${article.slug}`)
  }
}


</script>

<style lang="scss" scoped>
.chapter-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: var(--white-color);
}

.report-list__item {
  display: flex;
  align-items: center;
  padding: var(--space-xs-s) var(--space-s-m);
  border-bottom: 1px solid var(--base-color-10-tint);
  cursor: pointer;

  &:hover {
    background-color: var(--base-color-10-tint);
  }

  span {
    font-size: var(--size-4);
    font-weight: bold;
    margin-right: var(--space-xs-s);
    color: var(--primary-color);
    align-self: baseline;
  }

  div {
    h2 {
      margin: 0;
      color: var(--black-color);
    }

    p {
      margin: 0;
      color: var(--base-color-50-tint);
    }
  }
}

.report-list__item-content {
  width: 100%;
  text-align: end;
}

.actionable-area {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
}

</style>