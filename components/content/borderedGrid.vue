<template>
  <div class="bordered-grid">
    
    <div v-if="type === 'scenario1'" class="grid-container scenario1">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item special-border"></div>
    </div>

    <div v-else-if="type === 'scenario2'" class="scenario2">
      <div class="grid-item span">
        <slot></slot>
      </div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>

    <div v-else-if="type === 'scenario3'" class="scenario3">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
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

<style scoped lang="scss">
.bordered-grid {
  width: 100%;
}

.scenario1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: var(--space-m-l) var(--space-m-l);
  gap: 0;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
}

.scenario1 .grid-item {
  border: 1px solid transparent;
  position: relative;
}


.scenario1 .special-border {
  border-left-color: var(--secondary-color);
  border-top-color: var(--secondary-color);
}


.scenario2 {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: var(--space-xs);
    background-color: var(--secondary-color);
    transform: translateY(-100%);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: var(--space-xs);
    background-color: var(--secondary-color);
    transform: translateY(100%);
  }
}

.scenario2 .grid-item {
  border: 1px solid transparent;
}

.scenario2 .grid-item.span {
  border-top-color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
  padding-block: var(--space-3xs);
  grid-column: span 2;
}

.scenario2 .grid-item:last-child {
  border-left-color: var(--secondary-color);
}



.scenario3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
}

.scenario3 .grid-item {
  border: 1px solid transparent;
  position: relative;
}


.scenario3 .grid-item:nth-child(2) {
  border-left-color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
}
</style>
