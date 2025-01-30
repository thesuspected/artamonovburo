<template>
    <Layout>
        <Section>
            <Container class="grid grid-cols-1 lg:grid-cols-3">
                <h1 class="infant-font">Каталог фасадов</h1>
                <div class="flex" v-for="(category, key) in categories" :key="key">
                    <h4 class="infant-font">{{ category.name }}</h4>
                    <h6 class="infant-font">{{ category.count }}</h6>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-4">
                    <div class="card" v-for="(name, key) in product" :key="key">
                        <div class="square"></div>
                        <h6 class="font-size:20px">{{ name.name }}</h6>
                        <p class="font-size:20px">{{ name.price }}</p>
                        <m-btn label="Подробнее" full-width />
                    </div>
                </div>
            </Container>
        </Section>
    </Layout>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Layout from "~/components/layout/Layout.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"

const categories = [
    {
        name: `Термопанели`,
        count: `45`,
    },
    {
        name: `Клинкерная плитка`,
        count: `4`,
    },
    {
        name: `ППС декор`,
        count: `20`,
    },
    {
        name: `Лепной декор`,
        count: `20`,
    },
    {
        name: `Декоративня штукатурка`,
        count: `20`,
    },
    {
        name: `Комплектующие`,
        count: `20`,
    },
]

const product = [
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
    {
        name: "Фасадная термопанель «Артек»",
        price: "1 100 ₽",
    },
]
</script>

<style lang="scss" scoped>
.grid {
    gap: 20px;
}

.card {
    display: flex;
    flex-direction: column;

    .square {
        background: #d9d9d9;
        height: 250px;
    }
}
</style>
