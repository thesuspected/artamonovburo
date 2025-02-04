<template>
    <Section>
        <Container>
            <MainTitle>
                Оцените как мы меняем<br>
                <b class="text-primary">внешний вид домов</b>
            </MainTitle>
            <div v-for="(compare, key) in compares" :key="key" class="compare-block">
                <TextQuote>{{ compare.title }}</TextQuote>
                <div class="grid grid-cols-2">
                    <ImgComparisonSlider
                        v-for="(slider, sliderKey) in compare.sliders"
                        :key="sliderKey"
                        hover
                        class="slider"
                    >
                        <img slot="first" :src="slider.before" alt="facade 1" />
                        <img slot="second" :src="slider.after" alt="facade 2" />
                    </ImgComparisonSlider>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import { ImgComparisonSlider } from "@img-comparison-slider/vue"
import MainTitle from "~/components/text/MainTitle.vue"

const compares = [
    {
        title: "г. Энгельс, пос. Пребрежный, 2-х этажный дом",
        sliders: [
            {
                before: "/img/facades/facade_1_2.png",
                after: "/img/facades/facade_1_1.png",
            },
            {
                before: "/img/facades/facade_2_2.png",
                after: "/img/facades/facade_2_1.png",
            },
        ],
    },
    {
        title: "Екатериновский район, село Сластуха",
        sliders: [
            {
                before: "/img/facades/facade_3_2.png",
                after: "/img/facades/facade_3_1.png",
            },
            {
                before: "/img/facades/facade_4_2.png",
                after: "/img/facades/facade_4_1.png",
            },
        ],
    },
]
</script>

<style lang="scss" scoped>
.compare-block {
    .grid {
        gap: 20px;
        margin-bottom: 40px;

        .slider {
            outline: none;
        }
    }
}
</style>
