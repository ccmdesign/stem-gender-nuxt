<script lang="ts" setup>
const props = withDefaults(defineProps<{ title: string, hTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>(), {
  hTag: 'h3'
})

const corretctComponent = props.hTag
</script>

<template>
  <div class="header-start">
    <component :is="corretctComponent">
      {{ title }}
    </component>
  </div>
</template>
