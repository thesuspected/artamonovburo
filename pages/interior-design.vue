<template>
    <Layout>
        <PageHeader
            title="Дизайн интерьера"
            description="Используя знания о композиции, форме и цвете, создаём пространство для жизни в выбранном вами стиле"
            button-label="Портфолио работ"
        />
        <HouseSection
            title="Дизайн интерьера <br>
         от 4000 ₽/м2"
            src="/img/interior-design/architectural_design.png"
        />
        <DesignProject />
        <TilesSection />
        <ImagesGrid/>
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import DesignProject from "~/components/pages/interior-design/DesignProject.vue"
import TilesSection from "~/components/pages/interior-design/TilesSection.vue";
import ImagesGrid from "~/components/pages/interior-design/ImagesGrid.vue";
</script>

<style lang="scss" scoped></style>
