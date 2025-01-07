<template>
    <Layout>
        <PageHeader
            title="Строительство 
            <br> домов"
            description="Воспользуйтесь готовым проверенным решением или создайте уникальный дом по вашим пожеланиям"
            button-label="Рассчитать стоимость"
        />
        <HouseProjects />
        <StagesSection />
        <FormSection/>
        <Accordeon/>
        <Excursion/>
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import HouseProjects from "~/components/pages/construction/HouseProjects.vue"
import StagesSection from "~/components/pages/construction/StagesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue";
import Accordeon from "~/components/pages/construction/Accordeon.vue";
import Excursion from "~/components/pages/construction/Excursion.vue";
</script>

<style lang="scss" scoped></style>

