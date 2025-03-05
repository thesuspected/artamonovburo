<template>
    <Section :padding="100">
        <Container>
            <MainTitle>
                Каждый проект <b class="text-primary">уникален</b>,<br />
                как и <b class="text-primary">каждый клиент</b>, с которым мы работаем
            </MainTitle>
            <hr :style="`margin: ${isDesktop ? '30px 0 60px' : '30px 0'}`" />
            <div class="button">
                <component :is="isDesktop ? 'h3' : 'h4'" class="infant-font">Саратов | жк крылья</component>
                <NuxtLink to="/projects/jk-krylia-apartments" :style="`${isDesktop ? '':'flex-grow: 1;'}`">
                    <m-btn full-width outline>Подробнее о проекте</m-btn>
                </NuxtLink>
            </div>
            <ImagesGrid :images="images" />
            <hr :style="`margin: ${isDesktop ? '60px 0' : '30px 0'}`" />
            <div class="button">
                <component :is="isDesktop ? 'h3' : 'h4'" class="infant-font">Саратов | Техническая</component>
                <NuxtLink to="/projects/technical-street-apartments" :style="`${isDesktop ? '':'flex-grow: 1;'}`">
                    <m-btn full-width outline>Подробнее о проекте</m-btn>
                </NuxtLink
                >
            </div>

            <ImagesGrid :images="images2" />
            <hr class="hr-2" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ImageGridType } from "~/components/pages/general/types"
import MainTitle from "~/components/text/MainTitle.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import MBtn from "~/components/buttons/MBtn.vue"
import ImagesGrid from "../general/ImagesGrid.vue"
import useScreenController from "~/hooks/useScreenController"

defineProps({
    images: {
        type: Array as PropType<ImageGridType[]>,
    },
})
const { isDesktop } = useScreenController()
const images: ImageGridType[] = [
    {
        src: "img/interior-design/Krilya_1.png",
        rows: 2,
        cols: 8,
        alt: "house 1",
    },
    {
        src: "img/interior-design/Krilya_5.png",
        rows: 3,
        cols: 4,
        alt: "house 2",
    },
    {
        src: "img/interior-design/Krilya_2.png",
        rows: 1,
        cols: 3,
        alt: "house 3",
    },
    {
        src: "img/interior-design/Krilya_3.png",
        rows: 1,
        cols: 3,
        alt: "house 4",
    },
    {
        src: "img/interior-design/Krilya_4.png",
        rows: 1,
        cols: 2,
        alt: "house 5",
    },
]
const images2: ImageGridType[] = [
    {
        src: "img/interior-design/tech_1.png",
        rows: 3,
        cols: 3,
        alt: "house 1",
    },
    {
        src: "img/interior-design/tech_2.png",
        rows: 2,
        cols: 9,
        alt: "house 2",
    },
    {
        src: "img/interior-design/tech_3.png",
        rows: 1,
        cols: 3,
        alt: "house 3",
    },
    {
        src: "img/interior-design/tech_4.png",
        rows: 1,
        cols: 3,
        alt: "house 4",
    },
    {
        src: "img/interior-design/tech_5.png",
        rows: 1,
        cols: 3,
        alt: "house 5",
    },
]
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.images-grid {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(12, 1fr);

    .image {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}
</style>
