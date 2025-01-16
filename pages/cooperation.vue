<template>
    <Layout>
        <PageHeader
            title="Сотрудничество"
            description="Предлагаем лучшие условия для сотрудничества и инвестиций в застройку, обеспечивая надёжные партнёрские отношения"
            button-label="Стать партнером"
        />
        <HouseSection src="/img/cooperation/roofers.png" />
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
import PageHeader from "~/components/text/PageHeader.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import TwoColumnsTable from "~/components/pages/cooperation/TwoColumnsTable.vue"
import ComparisonSection from "~/components/pages/cooperation/ComparisonSection.vue"
import FinanceProjectsSection from "~/components/pages/cooperation/FinanceProjectsSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
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
