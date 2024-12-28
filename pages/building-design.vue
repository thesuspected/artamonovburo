<template>
    <Layout>
        <PageHeader
            title="Индивидуальное<br> проектирование"
            description="От предварительного концептуального дизайна до готовой рабочей документации, гарантируя высокое качество и соответствие всем строительным нормам"
            button-label="Получить консультацию"
        />
        <HouseSection />
        <TilesSection />
        <ImagesSection />
        <ServicesSection />
        <FormSection />
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import TilesSection from "~/components/pages/building-design/TilesSection.vue"
import ServicesSection from "~/components/pages/building-design/ServicesSection.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import ImagesSection from "~/components/pages/building-design/ImagesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
</script>

<style lang="scss" scoped>
</style>
