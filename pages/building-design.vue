<template>
    <Layout>
        <HeroSection background-image="/img/building-design/building-design-bg.png"
                     button-label="Получить консультацию">
            <template #title>
                Индивидуальное<br>
                проектирование
            </template>
            <template #subtitle>
                От предварительного концептуального дизайна<br>
                до готовой рабочей документации, гарантируя высокое качество<br>
                и соответствие всем строительным нормам
            </template>
        </HeroSection>
        <PageHeader
            title="Индивидуальное<br> проектирование"
            description="От предварительного концептуального дизайна до готовой рабочей документации, гарантируя высокое качество и соответствие всем строительным нормам"
            button-label="Получить консультацию"
        />
        <HouseSection title="Проектирование домов <br>от 4200 ₽/м2" src="/img/building-design/building-design-bg.jpg" />
        <TilesSection />
        <ServicesSection />
        <ImagesSection />
        <FormSection>
            Вместе <b class="text-primary">создадим дом</b>, <br />
            который будет соответствовать<br />
            <b class="text-primary">вашим ожиданиям </b> и предпочтениям
        </FormSection>
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import TilesSection from "~/components/pages/building-design/TilesSection.vue"
import ServicesSection from "~/components/pages/building-design/ServicesSection.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import ImagesSection from "~/components/pages/building-design/ImagesSection.vue"
import HeroSection from "~/components/pages/general/HeroSection.vue"
</script>
