<template>
    <Section class="hero-section" :style="`height: calc(100svh - ${isDesktop ? 150 : 82}px)`">
        <Container class="content">
            <component :is="isDesktop ? 'h2' : 'h4'" class="title infant-font">
                Создаем комфорт, <br />
                меняя пространство
            </component>
            <p class="description">
                Архитектурно-строительное бюро в Саратове.
                Проектируем и строим так, как сами
                стремимся жить - надежно, красиво, удобно.</p>
            <m-btn class="main-btn" label="Консультация" shine-effect @click="handleOpenDialogEvent" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import { Events } from "~/plugins/event-bus"
import useScreenController from "~/hooks/useScreenController"

const { isDesktop } = useScreenController()

const { $event } = useNuxtApp()
const handleOpenDialogEvent = () => {
    $event(Events.open_form_dialog, "Главная - Консультация")
}
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    background-image: url("/img/main_home.png");
    background-size: cover;
    background-position: center;
    color: $white-color;

    &:before {
        content: "";
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
            max-width: 450px;
        }

        .main-btn {
            width: 250px;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 50px 0 rgba(67, 93, 89, 0.8);
        }
    }
}
</style>
