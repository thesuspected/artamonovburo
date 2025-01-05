<template>
    <Layout>
        <PageHeader
            title="Строительство 
            <br> домов"
            description="Воспользуйтесь готовым проверенным решением или создайте уникальный дом по вашим пожеланиям"
            button-label="Рассчитать стоимость"
        />
        <HouseProjects />
        <TwoColumnsTable />
        <FormSection/>
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import HouseProjects from "~/components/pages/construction/HouseProjects.vue"
import TwoColumnsTable from "~/components/pages/construction/TwoColumnsTable.vue"
import FormSection from "~/components/pages/construction/FormSection.vue";
</script>

<style lang="scss" scoped></style>
