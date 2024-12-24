<template>
    <Layout>
        <section class="hero-section">
            <div class="content">
                <h1 class="title infant-font">
                    Создаём комфорт,<br> меняя пространство
                </h1>
                <p class="description">
                    Возьмём на себя 100% работ <br>
                    от проектирования дома <br>
                    до благоустройства участка
                </p>
                <m-btn label="Начать проект" />
            </div>
            <img
                class="bg-image"
                src="/img/main_home.png"
                alt="Modern house exterior"
            />
        </section>
    </Layout>
</template>

<script lang="ts" setup>
import Layout from "~/components/Layout/Layout.vue"
import MBtn from "~/components/buttons/MBtn.vue"
</script>

<style lang="scss">
//@import './assets/scss/colors.scss';
@import "./assets/scss/main.scss";

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
    }

    .bg-image {
        max-height: 90vh;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
}
</style>