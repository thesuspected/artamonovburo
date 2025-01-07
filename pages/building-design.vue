<template>
    <Layout>
        <PageHeader
            title="Индивидуальное<br> проектирование"
            description="От предварительного концептуального дизайна до готовой рабочей документации, гарантируя высокое качество и соответствие всем строительным нормам"
            button-label="Получить консультацию"
        />
        <HouseSection />
        <TilesSection />
        <ServicesSection />
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
import PageHeader from "~/components/text/PageHeader.vue"
import TilesSection from "~/components/pages/building-design/TilesSection.vue"
import ServicesSection from "~/components/pages/building-design/ServicesSection.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import type { TilesType } from "~/components/pages/building-design/types"
import { biBorderRight } from "@quasar/extras/bootstrap-icons"
import type { mdiBorderRight } from "@quasar/extras/mdi-v4"

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
