<template>
    <Layout>
        <PageHeader
            title="Отделка фасадов"
            description="Мы разрабатываем проект, подбираем материалы и выполняем все работы с гарантией. Вам не нужно беспокоиться о деталях — мы позаботимся обо всем"
            button-label="Записаться на консультацию"
        />
        <section class="grid grid-cols-3">
            <div v-for="(item, key) in fronts" :key="key" class="front-section">
                <h5 class="infant-font">{{ item.title }}</h5>
                <div>
                    <p class="subtitle-front" v-html="item.subtitle"></p>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script lang="ts" setup>
import Layout from "~/components/layout/Layout.vue"
import PageHeader from "~/components/text/PageHeader.vue"

const fronts = [
    {
        title: "особенный подход",
        subtitle:
            "Мы способны предложить <br>индивидуальные решения, <br>учитывающие особенности здания <br>и ваши пожелания",
    },
    {
        title: "визуализация фасада",
        subtitle: "Придадим дому стильный фасад благодаря дизайнеру, который сделает предварительный проект фасада",
    },
    {
        title: "отделочные бригады",
        subtitle:
            "Отделочники с опытом работы в сфере от 8 лет сделают работу идеально, в соответствии с предварительным проектом и всеми строительными нормами",
    },
]
</script>

<style lang="scss" scoped>
.front-section {
    border-right: 1px solid;
    :last-child {
        border: none;
    }
    height: 360px;
    padding: 60px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 30px;
    .grid {
        display: grid;
    }
    .infant-font {
        color: $dark-color;
        font-weight: 400;
        line-height: 60px;
        font-size: 50px;
    }
    .subtitle-front {
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
    }
}
</style>
