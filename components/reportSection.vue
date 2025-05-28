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
    "top_left"  // Shows the "Report" title after the buttons
    "left"      // Shows the report list
    "right";    // Shows the report content

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    gap: var(--space-2xl-3xl);
    grid-template-areas:
      "top_left top_right"
      "left right";
  }

  .report-section__top-left { grid-area: top_left; }
  .report-section__top-right { grid-area: top_right; }
  .report-section__left { grid-area: left; }
  .report-section__right { grid-area: right; }
}


  .report__button {
    border-width: 1px;
    color: var(--base-color);
  }

  .report-list {
    display: grid;
    grid-template-columns: 40% 2px auto;
    position: relative;
    z-index: 1;
  }

    .report-list__toc {
      .report-list__item {
        padding-inline: var(--space-m) var(--space-l);
        padding-block: var(--space-s);
        cursor: pointer;
        font-size: var(--size-0);
      }
      .report-list__item--active {
        background-color: var(--primary-color);
        color: var(--white-color);
      }
    }

    .report-list__spacer {
      background-image: linear-gradient(360deg, rgba(228, 228, 231, 0) 0%, rgba(228, 228, 231, 0.5) 15%, #E4E4E7 85%, rgba(228, 228, 231, 0) 100%);
    }

    .report-list__content {
      padding-inline: var(--space-2xl) var(--space-m);
      display: flex;
      gap: var(--space-xl);
      flex-direction: column;
      justify-content: center;
    }

      .report-list__title {
        font-size: var(--size-4);
        color: var(--primary-color);
      }

      .report-list__subtitle {
        font-size: var(--space-0);
      }
</style>