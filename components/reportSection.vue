<template>
  <section class="report-section">
    <div class="report-section__top-left">
      <slot name="top-left" />
    </div>

    <div class="report-section__top-right">
      <slot name="top-right" />
    </div>
    <div class="report-section__left">
      <slot name="left" />
    </div>
    <div class="report-section__right">
      <slot name="right" />
    </div>
    <div class="report-section__mobile">
      <slot name="mobile" />
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.report-section {
  padding: var(--space-m-l);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: var(--space-m-l);

  grid-template-areas:
    "top_right" // Reorders the buttons to show up before the "Report" title
    "top_left" // Shows the "Report" title after the buttons
    "left" // Shows the report list
    "right"; // Shows the report content

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: var(--space-m);
    grid-template-areas:
      "top_left top_right"
      "left right";
  }

  .report-section__top-left {
    grid-area: top_left;
  }

  .report-section__top-right {
    grid-area: top_right;
    display: flex;
    gap: 0.5rem;
  }

  .report-section__left {
    grid-area: left;
  }

  .report-section__right {
    grid-area: right;
  }

  .report-section__mobile {
    grid-column: 1 / -1;
  }
}

.report-section__right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.report-section__mobile {
  padding-inline: 0;
}

@media (max-width: 768px) {

  .report-section__left,
  .report-section__right {
    display: none;
  }
}

@media (min-width: 768px) {
  .report-section__mobile {
    display: none;
  }
}

:deep(.report__button) {
  border-width: 1px;
  color: var(--base-color);
}

:deep(.report-list__mobile a) {
  display: block;
  padding-inline: 0;
  padding-block: var(--space-xs);
  color: var(--base-color-70-tint);
  border-bottom: 1px solid var(--base-color-05-tint);
  text-decoration: none;
}

:deep(.report-list__item) {
  padding-inline: var(--space-m) var(--space-l);
  padding-block: var(--space-s);
  cursor: pointer;
  font-size: var(--size-0);
}

:deep(.report-list__item--active) {
  background-color: var(--primary-color);
  color: var(--white-color);
}

:deep(.report-list__content) {
  display: flex;
  gap: var(--space-m);
  flex-direction: column;
  justify-content: center;
}

:deep(.report-list__title) {
  font-size: var(--size-3);
  color: var(--primary-color);
}

:deep(.report-list__subtitle) {
  font-size: var(--space-0);
}

:deep(.report__button) {
  color: var(--white-color);
}

:deep(.report-list__toc) {
  display: flex;
  flex-direction: column;
  padding-block: var(--space-s);
  cursor: pointer;
  border-right: 1px solid;
  border-image: linear-gradient(to bottom, transparent 0%, #ccc 50%, transparent 100%) 1;
}
</style>