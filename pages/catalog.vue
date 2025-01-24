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
                                <q-btn-dropdown label="Материал">
                                    <q-list>
                                        <q-item clickable v-close-popup>
                                            <q-item-section>
                                                <q-item-label>Photos</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup>
                                            <q-item-section>
                                                <q-item-label>Videos</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup>
                                            <q-item-section>
                                                <q-item-label>Articles</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                        <div class="materials mt-10">
                            <p>Необходима ли доставка?</p>
                            <div class="q-pa">
                                <q-btn-dropdown label="Да, до объекта">
                                    <q-list>
                                        <q-item clickable v-close-popup>
                                            <q-item-section>
                                                <q-item-label>Photos</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup>
                                            <q-item-section>
                                                <q-item-label>Videos</q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup>
                                            <q-item-section>
                                                <q-item-label>Articles</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
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
}
</style>
