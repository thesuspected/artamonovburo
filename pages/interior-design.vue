<template>
    <Layout>
        <HeroSection background-image="/img/interior-design/interior-design.png"
                     button-label="Получить консультацию">
            <template #title>
                Дизайн интерьера
            </template>
            <template #subtitle>
                Используя знания о композиции, форме и цвете,<br>
                создаём пространство для жизни в выбранном вами стиле
            </template>
            <template #bottom>
                Дизайн интерьера <br>от 4000 ₽/м2
            </template>
        </HeroSection>
        <DesignSection />
        <TilesSection />
        <ProjectSection />
        <FormSection :src="src">
            Мы разрабатываем проекты, <br>
            которые <b class="text-primary">соответствуют</b> вашим <br>
            индивидуальным <b class="text-primary">потребностям</b> <br>
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

defineProps({
    src: {
        type: String,
        default: "img/interior-design/Form.png",
    },
})


</script>

<style lang="scss" scoped></style>
