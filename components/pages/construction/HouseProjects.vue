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
                <div class="house-card">
                    <div class="card_1"></div>
                    <img src="/img/construction/house_1.png" alt="" />
                    <!--  Контент с иконками и кнопками  -->
                    <div class="flex justify-between">
                        <div class="icons">
                            <img class="icon_house" src="/public/img/construction/house.svg" />
                            <p>68 м2</p>
                            <img class="icon_bed" src="/public/img/construction/bed.svg" />
                            <p>2 спальни</p>
                            <img class="icon_bathroom" src="/public/img/construction/bathroom.svg" />
                            <p>1 санузел</p>
                        </div>
                        <div class="buttons">
                            <MBtn class="Button_1">Подробнее</MBtn><MBtn class="Button_2">Консультация</MBtn>
                        </div>
                    </div>
                    <hr class="border-line" />
                </div>
                <div class="house-card">
                    <div class="card_2">
                        <img src="/img/construction/house_2.png" alt="" />
                        <!--  Контент с иконками и кнопками  -->
                        <div class="flex justify-between">
                            <div class="icons">
                                <img class="icon_house" src="/public/img/construction/house.svg" />
                                <p>68 м2</p>
                                <img class="icon_bed" src="/public/img/construction/bed.svg" />
                                <p>2 спальни</p>
                                <img class="icon_bathroom" src="/public/img/construction/bathroom.svg" />
                                <p>1 санузел</p>
                            </div>
                            <div class="buttons">
                                <MBtn class="Button_1">Подробнее</MBtn><MBtn class="Button_2">Консультация</MBtn>
                            </div>
                        </div>
                        <hr class="border-line" />
                    </div>
                </div>
                <div class="house-card">
                    <div class="card_3">
                        <img src="/img/construction/house_3.png" alt="" />
                        <!--  Контент с иконками и кнопками  -->
                        <div class="flex justify-between">
                            <div class="icons">
                                <img class="icon_house" src="/public/img/construction/house.svg" />
                                <p>68 м2</p>
                                <img class="icon_bed" src="/public/img/construction/bed.svg" />
                                <p>2 спальни</p>
                                <img class="icon_bathroom" src="/public/img/construction/bathroom.svg" />
                                <p>1 санузел</p>
                            </div>
                            <div class="buttons">
                                <MBtn class="Button_1">Подробнее</MBtn><MBtn class="Button_2">Консультация</MBtn>
                            </div>
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
        meters: "68м2",
        bedroom: "2 спальни",
        bathroom: "1 санузел",
    },
    {
        src: "/img/construction/house_2.png",
        meters: "68м2",
        bedroom: "2 спальни",
        bathroom: "1 санузел",
    },
    {
        src: "/img/construction/house_3.png",
        meters: "68м2",
        bedroom: "2 спальни",
        bathroom: "1 санузел",
    },
]
</script>

<style lang="scss" scoped>
.grid {
    .sticky-block {
        h3 {
            margin-bottom: 30px;
            position: sticky;
            top: 15px;
        }

        p {
            position: sticky;
            top: 200px;
        }
    }

    .house-block {
        .house-card {
            .flex {
                .icons {
                    display: flex;
                    flex-wrap: wrap-reverse;
                    margin-top: 5px;
                    .icon_bed {
                        margin-left: 20px;
                    }
                    .icon_bathroom {
                        margin-left: 20px;
                    }
                }
                p {
                    margin-top: 17px;
                    margin-left: 5px;
                }
                .buttons {
                    margin-top: 10px;
                    .Button_1 {
                        border-radius: 5px;
                        margin-right: 10px;
                    }
                    .Button_2 {
                        border-radius: 5px;
                    }
                }
            }
            .border-line {
                margin-top: 30px;
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
