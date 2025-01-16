<template>
    <Section>
        <Container>
            <hr />
            <h3 class="infant-font">Дом в стиле Тюдор</h3>
            <ImagesGrid :images="images" />
            <div class="house-block col-span-2">
                <div v-for="(house, key) in houses" :key="key" class="house-card">
                    <div class="flex justify-between">
                        <div class="icons">
                            <div v-for="(icon, key) in house.icons" :key="key" class="icon">
                                <img class="icon_house" :src="icon.src" alt="icon house" />
                                <p>{{ icon.title }}</p>
                            </div>
                        </div>
                        <div class="buttons">
                            <m-btn label="Консультация" outline />
                        </div>
                    </div>
                </div>
            </div>
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
]
</script>

<style lang="scss" scoped>
h3 {
    margin-top: 40px;
    margin-bottom: 40px;
}
.flex {
    .icons {
        display: flex;
        gap: 20px;
        margin-top: 5px;

        .icon {
            display: flex;
            align-items: center;

            img {
                height: 40px;
                width: 40px;
            }

            .icon_bed {
                margin-left: 20px;
            }

            .icon_bathroom {
                margin-left: 20px;
            }
        }
    }
    .icons2 {
        display: flex;
        gap: 20px;
        margin-top: 5px;

        .icon {
            display: flex;
            align-items: center;

            img {
                height: 40px;
                width: 40px;
            }

            .icon_bed {
                margin-left: 20px;
            }

            .icon_bathroom {
                margin-left: 20px;
            }
        }
    }

    p {
        margin-top: 17px;
        margin-left: 5px;
    }

    .buttons {
        display: flex;
        gap: 12px;
        margin-top: 16px;
    }
}

.card_2 {
    margin-top: 30px;
}

.card_3 {
    margin-top: 30px;
}
</style>
