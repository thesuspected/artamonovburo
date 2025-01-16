<template>
    <Section class="hero-section">
        <Container class="content">
            <h2 class="title infant-font">
                Создаём комфорт,<br> меняя пространство
            </h2>
            <p class="description">
                Возьмём на себя 100% работ <br>
                от проектирования дома <br>
                до благоустройства участка
            </p>
            <m-btn class="main-btn" label="Заказать проект" shine-effect />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    height: calc(100vh - 150px);
    background-image: url("/img/main_home.png");
    background-size: cover;
    background-position: center;
    color: $white-color;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        background: rgba(9, 28, 25, 0.2);
        width: 100%;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
        isolation: isolate;

        .title {
            margin-bottom: 24px;
            font-weight: 600;
            text-shadow: 2px 0 50px $dark-color;
        }

        .description {
            font-size: 18px;
            font-weight: 400;
            color: $light-color;
            text-shadow: 2px 0 50px $dark-color;
            margin-bottom: 40px;
        }

        .main-btn {
            width: 250px;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 50px 0 rgba(67, 93, 89, 0.8);
        }
    }
}
</style>