<template>
    <Layout>
        <Section>
            <Container>
                <div class="grid grid-cols-2">
                    <div class="img col-span-1">
                        <img class="wall" src="/public/img/catalog/wall.png" alt="" />
                        <div class="catalog">
                            <img class="choice" src="/public/img/catalog/wall.png" alt="" />
                            <img class="choice" src="/public/img/catalog/wall.png" alt="" />
                            <img class="choice" src="/public/img/catalog/wall.png" alt="" />
                            <img class="choice" src="/public/img/catalog/wall.png" alt="" />
                            <img class="choice" src="/public/img/catalog/wall.png" alt="" />
                        </div>
                    </div>
                    <div class="description col-span-1 ml-5">
                        <h3 class="infant-font">
                            термопанель <br />
                            «название»
                        </h3>
                        <h3 class="price mt-20">1 100 ₽</h3>
                        <div class="size mt-10">
                            <p>Размер:</p>
                            <m-btn label="50 мм" class="button" />
                            <m-btn label="80 мм" class="button ml-5" outline />
                            <m-btn label="100 мм" class="button ml-5" outline />
                        </div>
                        <div class="materials mt-10">
                            <p>Крепежные материалы:</p>
                            <div class="q-pa">
                                <q-select
                                    v-model="form.material"
                                    outlined
                                    :options="materials"
                                    placeholder="Выберите"
                                    color="primary"
                                />
                            </div>
                        </div>
                        <div class="materials mt-10">
                            <p>Необходима ли доставка?</p>
                            <div class="q-pa">
                                <q-select
                                    v-model="form.delivery"
                                    outlined
                                    :options="delivery"
                                    placeholder="Выберите"
                                    color="primary"
                                />
                            </div>
                        </div>
                        <MBtn class="cost">Расчитать стоимость</MBtn>
                        <div class="parameters">
                            <div class="column-1">
                                <p>Цвет</p>
                                <p>Основа термопанели</p>
                                <p>Декоративный слой</p>
                                <p>Размер панели</p>
                            </div>
                            <div class="column-2">
                                <p>Баварская кладка</p>
                                <p>Cамозатухающий пенополистирол ППС‑С.20–25</p>
                                <p>Клинкерная плитка с уже затёртыми швами</p>
                                <p>1115×450 мм (0.46 кв.м.)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carusel">
                    <h3 class="infant-font">Смотрите также</h3>
                    <div class="swiper">
                        <swiper
                            :slides-per-view="4"
                            :space-between="30"
                            :navigation="true"
                            :modules="modules"
                            class="mySwiper"
                        >
                            <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                            <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                            <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                            <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                            <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                            ...
                        </swiper>
                    </div>
                </div>
            </Container>
        </Section>
    </Layout>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import Layout from "~/components/layout/Layout.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"

const modules = [Navigation]
const materials = ["Кирпич", "Камень", "Песок"]
const delivery = ["Да", "Нет"]
const form = ref({
    material: "Кирпич",
    delivery: "Да",
})
</script>

<style lang="scss" scoped>
.q-pa {
    width: 425px;
}
.grid {
    .img {
        .wall {
            height: 721px;
            width: 721px;
        }
        .catalog {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            margin-top: 20px;
            .choice {
                height: 129px;
                width: 129px;
            }
        }
    }
    .description {
    }
    .parameters {
        margin-top: 30px;
        border-top: 1px solid;
        display: flex;
        padding-top: 30px;
        .column-2 {
            margin-left: 50px;
        }
    }
}
.cost {
    width: 425px;
    margin-top: 30px;
}
.carusel {
    margin-top: 120px;
    .swiper {
        margin-top: 30px;
    }
    &:deep(.swiper) {
        .swiper-button-prev {
            background: $primary-color;
            opacity: 1;
            border-radius: 100%;
            color: white;
            padding: 10px;
            width: 50px;
            height: 50px;
            margin-left: -10px;
            &:after {
                font-size: 20px;
            }
        }
        .swiper-button-next {
            background: $primary-color;
            opacity: 1;
            border-radius: 100%;
            color: white;
            width: 50px;
            height: 50px;
            margin-right: -10px;
            &:after {
                font-size: 20px;
            }
        }
    }
}
</style>
