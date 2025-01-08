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
       
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue";
</script>

<style lang="scss" scoped></style>