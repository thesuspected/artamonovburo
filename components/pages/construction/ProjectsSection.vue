<template>
    <Section>
        <Container class="grid grid-cols-3">
            <div class="sticky-block">
                <h3 class="infant-font">
                    Проекты домов <br />
                    готовые для <br />
                    строительства
                </h3>
                <p>
                    Вы сэкономите время, так как разработка <br />
                    индивидуального проекта не требуется, <br />
                    что способствует быстрому началу <br />
                    строительного процесса. <br />
                    <br />
                    Предварительно рассчитанные сметы <br />
                    помогают избежать перерасхода бюджета, <br />
                    обеспечивая экономию денежных средств
                </p>
            </div>
            <div class="house-block col-span-2">
                <div v-for="(house, key) in houses" :key="key" class="house-card">
                    <img :src="house.src" alt="" />
                    <div class="flex justify-between">
                        <div class="icons">
                            <div v-for="(icon, key) in house.icons" :key="key" class="icon">
                                <img class="icon_house" :src="icon.src" alt="icon house" />
                                <p>{{ icon.title }}</p>
                            </div>
                        </div>
                        <div class="buttons">
                            <m-btn label="Подробнее" />
                            <m-btn label="Консультация" outline />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import MBtn from "~/components/buttons/MBtn.vue"

const houses = [
    {
        src: "/img/construction/house_1.png",
        icons: [
            {
                title: "68м2",
                src: "/img/construction/house.svg",
            },
            {
                title: "2 спальни",
                src: "/img/construction/bed.svg",
            },
            {
                title: "1 санузел",
                src: "/img/construction/bathroom.svg",
            },
        ],
    },
    {
        src: "/img/construction/house_2.png",
        icons: [
            {
                title: "68м2",
                src: "/img/construction/house.svg",
            },
            {
                title: "2 спальни",
                src: "/img/construction/bed.svg",
            },
            {
                title: "1 санузел",
                src: "/img/construction/bathroom.svg",
            },
        ],
    },
    {
        src: "/img/construction/house_3.png",
        icons: [
            {
                title: "68м2",
                src: "/img/construction/house.svg",
            },
            {
                title: "2 спальни",
                src: "/img/construction/bed.svg",
            },
            {
                title: "1 санузел",
                src: "/img/construction/bathroom.svg",
            },
        ],
    },
]
</script>

<style lang="scss" scoped>
.grid {
    .sticky-block {
        position: sticky;
        top: 15px;
        align-self: self-start;

        h3 {
            margin-bottom: 30px;
        }

        p {
        }
    }

    .house-block {
        .house-card {
            border-bottom: 1px solid $dark-color;
            margin-bottom: 20px;
            padding-bottom: 20px;

            &:last-child {
                border-bottom: none;
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
        }
    }
}
</style>
