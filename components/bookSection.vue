<template>
    <twin-section class="book">
      <template #left>
        <img src="/images/book.webp" alt="" class="twin-section__left" >
      </template>
      <template #right>
        <div class="twin-section__right book__info stack">
            <h2>{{ $t('book.title') }}</h2>
            <p>{{ $t('book.paragraph') }}</p>
            <a href="https://www.africanminds.co.za/gender-stem/"
                target="_blank"
                class="button"
                color="white"
                visual="primary"
                size="l"
                to="">{{ $t('book.button') }}</a>
        </div>
      </template>
    </twin-section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .book {
        --gradient-color: ;
        padding-inline: var(--space-m-l);
        color: var(--white-color);
        background-color: var(--primary-color-80-shade); 
        background-image: url(/images/pattern.webp);
        background-size: cover;
        background-position: top right;
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        align-items: center;
        margin-bottom: -10%;
        position: relative;
        & > * {
            position: relative;
        }
        &::before {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            right: 0;
            height: 13%;
            background-color: var(--white-color);
        }

        @media (max-width: 768px) {
            margin-bottom: 0;
            &::before {
                height: 7%;
            }
        }
    }

        .book__cover {
            width: 30%;
        }
</style>