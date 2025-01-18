<template>
    <Section>
        <Container>
            <hr />
            <h3 class="infant-font">Дом в стиле Тюдор</h3>
            <ImagesGrid :images="images" />
            <div class="house-block">
                <div class="flex">
                    <div v-for="(house, key) in houses" :key="key" class="info-block">
                        <p>{{ house.title }}</p>
                        <div class="icons">
                            <div v-for="(icon, key) in house.icons" :key="key" class="icon">
                                <img class="img" :src="icon.src" alt="icon house" />

                                <p>{{ icon.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <m-btn label="Консультация" class="button" outline />
            </div>

            <hr class="b-b" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ImageGridType } from "~/components/pages/general/types"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import ImagesGrid from "../general/ImagesGrid.vue"
import MBtn from "~/components/buttons/MBtn.vue"
defineProps({
    images: {
        type: Array as PropType<ImageGridType[]>,
    },
})
const images: ImageGridType[] = [
    {
        src: "img/cooperation/tudor_1.png",
        rows: 3,
        cols: 8,
        alt: "house 1",
    },
    {
        src: "img/cooperation/tudor_2.png",
        rows: 2,
        cols: 4,
        alt: "house 2",
    },
    {
        src: "img/cooperation/tudor_3.png",
        rows: 1,
        cols: 4,
        alt: "house 3",
    },
]
const houses = [
    {
        title: "О проекте:",
        icons: [
            {
                title: "250м2",
                src: "/img/construction/house.svg",
            },
            {
                title: "10 соток",
                src: "/img/cooperation/trees.svg",
            },
            {
                title: "IV к. 2025 г.",
                src: "/img/cooperation/calendar.svg",
            },
        ],
    },
    {
        title: "Финансовые условия:",
        icons: [
            {
                title: "30% годовых",
                src: "/img/cooperation/hand-coins.svg",
            },
            {
                title: "от 1 млн. ₽ ",
                src: "/img/cooperation/door.svg",
            },
        ],
    },
]
</script>

<style lang="scss" scoped>
h3 {
    margin-top: 40px;
    margin-bottom: 40px;
}
.house-card2 {
    margin-top: 15px;
}
.house-block {
    display: flex;
    margin-top: 15px;
}
.vertical {
    height: 70px;
    border-left: 1px solid;
    margin: 10px;
}
.house-block {
    display: flex;
    justify-content: space-between;
    .button {
        align-self: flex-end;
        margin-bottom: 15px;
    }
    .flex {
        .info-block {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
            &:first-child {
                border-right: 1px solid $secondary-color;
                padding-right: 20px;
            }
            &:last-child {
                padding-left: 20px;
            }
            .icons {
                display: flex;
                gap: 20px;
                .icon {
                    display: flex;
                    align-items: center;
                    p {
                        margin: 0;
                    }
                    .img {
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
    }
}
</style>
