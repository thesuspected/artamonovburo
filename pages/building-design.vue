<template>
    <Layout>
        <PageHeader
            title="Индивидуальное<br> проектирование"
            description="От предварительного концептуального дизайна до готовой рабочей документации, гарантируя высокое качество и соответствие всем строительным нормам"
            button-label="Получить консультацию"
        />
        <HouseSection 
        title="Проектирование домов <br>
         от 4200 ₽/м2"
        src="/img/building_design_bg.png"
        />
        <TilesSection />
        <ServicesSection />
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import TilesSection from "~/components/pages/building-design/TilesSection.vue"
import ServicesSection from "~/components/pages/building-design/ServicesSection.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
</script>
