<template>
    <Layout>
        <HeroSection background-image="/img/cooperation/cooperation.jpeg" button-label="Стать партнером">
            <template #title>
                Сотрудничество
            </template>
            <template #subtitle>
                Предлагаем лучшие условия для сотрудничества и инвестиций<br>
                в застройку, обеспечивая надёжные партнёрские отношения
            </template>
        </HeroSection>
        <TwoColumnsTable class="twoColumnsTable" />
        <ComparisonSection />
        <FinanceProjectsSection />
        <FormSection :src="src">
            уникальные возможности <br />
            для инвестирования в застройку, <br />
            которые гарантируют стабильную<br />
            и высокую доходность
        </FormSection>
    </Layout>
</template>

<script lang="ts" setup>
import TwoColumnsTable from "~/components/pages/cooperation/TwoColumnsTable.vue"
import ComparisonSection from "~/components/pages/cooperation/ComparisonSection.vue"
import FinanceProjectsSection from "~/components/pages/cooperation/FinanceProjectsSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import HeroSection from "~/components/pages/general/HeroSection.vue"

defineProps({
    src: {
        type: String,
        default: "img/cooperation/expert.png",
    },
})
</script>

<style lang="scss" scoped>
.twoColumnsTable {
    margin-top: 150px;
}
</style>
