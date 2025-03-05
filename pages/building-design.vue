<template>
    <Layout>
        <HeroSection
            background-image="/img/building-design/building-design-bg.png"
            button-label="Получить консультацию"
            @click-btn="handleOpenDialogEvent"
        >
            <template #title>
                Индивидуальное<br />
                проектирование
            </template>
            <template #subtitle>
                От предварительного концептуального дизайна<br />
                до готовой рабочей документации, гарантируя высокое качество<br />
                и соответствие всем строительным нормам
            </template>
            <template #bottom> Проектирование домов <br />от 2000 ₽/м²</template>
        </HeroSection>
        <TilesSection />
        <ServicesSection />
        <ImagesSection />
        <FormSection>
            Оставьте номер,<br />
            чтобы мы <b class="text-primary">создали дом,</b> <br />соответствующий
            <b class="text-primary">вашим ожиданиям </b>
        </FormSection>
    </Layout>
</template>

<script lang="ts" setup>
import TilesSection from "~/components/pages/building-design/TilesSection.vue"
import ServicesSection from "~/components/pages/building-design/ServicesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import ImagesSection from "~/components/pages/building-design/ImagesSection.vue"
import HeroSection from "~/components/pages/general/HeroSection.vue"
import { Events } from "~/plugins/event-bus"

useSeoMeta({
    title: "Индивидуальное проектирование - Архитектурно-строительное бюро Artamonov",
    description:
        "От предварительного концептуального дизайна до готовой рабочей документации, гарантируя высокое качество и соответствие всем строительным нормам",
    ogImage: "/img/building-design/building-design-bg.png",
})

const { $event } = useNuxtApp()
const handleOpenDialogEvent = () => {
    $event(Events.open_form_dialog, "Индивидуальное проектирование - Получить консультацию")
}
</script>
