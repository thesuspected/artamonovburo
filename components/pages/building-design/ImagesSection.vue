<template>
    <Section :top="20">
        <Container>
            <TextQuote>
                Ниже представлены дома,
                <b class="text-primary"
                    >спроектированные и изготовленные<br />
                    нами</b
                >
                в разных стилях, таких как Хай-тек, Фахверк и другие
            </TextQuote>
            <ImagesGrid :images="images" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import ImagesGrid from "~/components/pages/general/ImagesGrid.vue"
import type { ImageGridType } from "~/components/pages/general/types"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import TextQuote from "~/components/text/TextQuote.vue"

const images: ImageGridType[] = [
    {
        src: "img/building-design/house_1.png",
        rows: 2,
        cols: 8,
        alt: "house 1",
    },
    {
        src: "img/building-design/house_2.png",
        rows: 3,
        cols: 4,
        alt: "house 2",
    },
    {
        src: "img/building-design/house_3.png",
        rows: 1,
        cols: 3,
        alt: "house 3",
    },
    {
        src: "img/building-design/house_4.png",
        rows: 1,
        cols: 3,
        alt: "house 4",
    },
    {
        src: "img/building-design/house_5.png",
        rows: 1,
        cols: 2,
        alt: "house 5",
    },
]
</script>

<style lang="scss" scoped></style>
