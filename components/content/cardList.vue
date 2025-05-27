<template>
    <div class="card-list">
        <div class="card-list__header">
            <slot name="header"></slot>
        </div>
        <div class="card-list__cards">
            <slot name="cards"></slot>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.card-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    .card-list__header,
    .card-list__cards {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);    
    }
    &:deep(ul:not(.cluster):not(.grid)),
    &:deep(ul) {
        li {
            position: relative;
            padding: var(--space-s);
            border: 1px solid var(--secondary-color);
            box-shadow: 0px 0px 8px 0px hsla(0, 0%, 0%, 0.12);
            box-shadow: 8px 8px 16px 0px hsla(0, 0%, 0%, 0.04);
            &:before {
                content: '';
                position: absolute;
                top: var(--space-s);
                left: 0;
                bottom: var(--space-s);
                width: var(--space-3xs);
                background-color: var(--primary-color);
                transform: translateX(-50%);
            }
        }
    }
}
</style>