<template>
  <div class="bordered-grid">
    
    <div v-if="type === 'scenario1'" class="grid-container scenario1">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item special-border"></div>
    </div>

    <div v-else-if="type === 'scenario2'" class="scenario2">
      <slot></slot>
    </div>

    <div v-else-if="type === 'scenario3'" class="scenario3">
      <div class="left-item">
        <slot name="left"></slot>
      </div>
      <div class="right-item">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorderedGrid',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['scenario1', 'scenario2', 'scenario3'].includes(value)
    }
  }
}
</script>

<style scoped>
.bordered-grid {
  width: 100%;
  margin: 1rem 0;
}

/* Scenario 1: 2x2 grid with specific borders */
.scenario1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  width: 100%;
  aspect-ratio: 1/1;
}

.scenario1 .grid-item {
  border: 1px solid transparent;
  position: relative;
}

.scenario1 .grid-item:not(:last-child) {
  border: 1px solid transparent;
}

.scenario1 .special-border {
  border-left: 2px solid #f3edde;
  border-top: 2px solid #f3edde;
}

/* Scenario 2: Single div with top and bottom borders */
.scenario2 {
  width: 100%;
  padding: 1.5rem 0;
  border-top: 2px solid #f3edde;
  border-bottom: 2px solid #f3edde;
  border-left: none;
  border-right: none;
}

/* Scenario 3: Two side-by-side divs with touching borders */
.scenario3 {
  display: flex;
  width: 100%;
}

.scenario3 .left-item,
.scenario3 .right-item {
  flex: 1;
  padding: 1rem;
}

.scenario3 .left-item {
  border-right: 2px solid #f3edde;
}

.scenario3 .right-item {
  border-left: 2px solid #f3edde;
  margin-left: -2px;
</style>
