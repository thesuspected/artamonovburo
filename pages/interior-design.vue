<template>
    <Layout>
        <HeroSection
            background-image="/img/interior-design/interior-design.png"
            button-label="Получить консультацию"
            @click-btn="handleOpenDialogEvent"
        >
            <template #title> Дизайн интерьера </template>
            <template #subtitle>
                Используя знания о композиции, форме и цвете,<br />
                создаём пространство для жизни в выбранном вами стиле
            </template>
            <template #bottom> Дизайн интерьера <br />от 2000 ₽/м² </template>
        </HeroSection>
        <DesignSection />
        <TilesSection />
        <ProjectSection />
        <FormSection :src="src">
            Мы разрабатываем проекты, <br />
            которые <b class="text-primary">соответствуют</b> вашим <br />
            индивидуальным <b class="text-primary">потребностям</b> <br />
            и желаниям
        </FormSection>
        <ImagesGrid />
    </Layout>
</template>

<script lang="ts" setup>
import DesignSection from "~/components/pages/interior-design/DesignSection.vue"
import TilesSection from "~/components/pages/interior-design/TilesSection.vue"
import ProjectSection from "~/components/pages/interior-design/ProjectSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import ImagesGrid from "~/components/pages/general/ImagesGrid.vue"
import HeroSection from "~/components/pages/general/HeroSection.vue"
import { Events } from "~/plugins/event-bus"

defineProps({
    src: {
        type: String,
        default: "img/interior-design/Form.png",
    },
})

useSeoMeta({
    title: "Дизайн интерьера - Архитектурно-строительное бюро Artamonov",
    description: "Используя знания о композиции, форме и цвете, создаём пространство для жизни в выбранном вами стиле",
    ogImage: "/img/interior-design/interior-design.png",
})
const { $event } = useNuxtApp()
const handleOpenDialogEvent = () => {
    $event(Events.open_form_dialog, "Дизайн интерьера - Получить консультацию")
}
</script>

<style lang="scss" scoped></style>
