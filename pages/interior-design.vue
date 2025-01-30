<template>
    <div>
        <PageHeader
            title="Дизайн интерьера"
            description="Используя знания о композиции, форме и цвете, создаём пространство для жизни в выбранном вами стиле"
            button-label="Портфолио работ"
        />
        <HouseSection
            title="Дизайн интерьера <br>от 4000 ₽/м2"
            src="/img/interior-design/architectural_design.png"
        />
        <DesignSection />
        <TilesSection />
        <ProjectSection />
        <FormSection :src="src">
            Мы разрабатываем проекты, <br />
            которые соответствуют вашим <br />индивидуальным потребностям <br />и желаниям
        </FormSection>
        <ImagesGrid />

    </div>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import DesignSection from "~/components/pages/interior-design/DesignSection.vue"
import TilesSection from "~/components/pages/interior-design/TilesSection.vue"
import ProjectSection from "~/components/pages/interior-design/ProjectSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import ImagesGrid from "~/components/pages/general/ImagesGrid.vue"

defineProps({
    src: {
        type: String,
        default: "img/interior-design/Form.png",
    },
})


</script>

<style lang="scss" scoped></style>
