<template>
    <div>
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
    </div>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import TilesSection from "~/components/pages/building-design/TilesSection.vue"
import ServicesSection from "~/components/pages/building-design/ServicesSection.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import ImagesSection from "~/components/pages/building-design/ImagesSection.vue"
</script>
