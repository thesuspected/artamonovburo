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
                            термопанель <br>
                            «название»
                        </h3>
                        <h3 class="price mt-10">1 100 ₽</h3>
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
            </Container>
        </Section>
        <FacadeMaterialsSection>
            Смотрите также
        </FacadeMaterialsSection>
    </Layout>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import "swiper/css"
import "swiper/css/navigation"
import FacadeMaterialsSection from "~/components/pages/general/FacadeMaterialsSection.vue"

const route = useRoute()
const { data } = await useFetch("/api/product", {
    query: { id: route.query.id },
})

const materials = ["Кирпич", "Камень", "Песок"]
const delivery = ["Да", "Нет"]
const form = ref({
    material: "Кирпич",
    delivery: "Да",
})

onMounted(() => {
    console.log(data.value)
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
        margin-top: 20px;
        border-top: 1px solid;
        display: flex;
        padding-top: 20px;

        .column-2 {
            margin-left: 50px;
        }
    }
}

.cost {
    width: 425px;
    margin-top: 20px;
}
</style>
