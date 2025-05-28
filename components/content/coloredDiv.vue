<template> 
    <div class="colored-div post-layout">
        <slot></slot>
    </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
    .colored-div {
        background-color: var(--secondary-color);
        grid-column: 1/5;
        padding-bottom: var(--space-xl);
    }
</style>
