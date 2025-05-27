<template>
    <percentage-graph v-if="graph" :percentage="percentage" :gap="gap" />
    <div class="graph-text">
        <slot></slot>
    </div>
</template>
<script setup>
const props = defineProps({
    percentage: {
        type: Number,
        default: 0
    },
    gap: {
        type: Number,
        default: 0
    },
    graph: {
        type: Boolean,
        default: false
    }
})
</script>
<style scoped lang="scss">

</style>
