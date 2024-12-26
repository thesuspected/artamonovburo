<template>
    <section class="hero-section">
        <div class="content">
            <h1 class="title infant-font">
                Создаём комфорт,<br> меняя пространство
            </h1>
            <img
                class="bg-image"
                src="/img/main_home.png"
                alt="Modern house exterior"
            />
            <p class="description">
                Возьмём на себя 100% работ <br>
                от проектирования дома <br>
                до благоустройства участка
            </p>
            <m-btn label="Начать проект" shine-effect />
        </div>
    </section>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    height: 90vh;

    .content {
        padding: 0 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
        isolation: isolate;

        .title {
            mix-blend-mode: difference;
            color: $dark-color;
            margin-bottom: 24px;
        }

        .description {
            margin-bottom: 40px;
        }

        .bg-image {
            max-height: 90vh;
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
        }
    }
}
</style>