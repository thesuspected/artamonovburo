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
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import HouseProjects from "~/components/pages/construction/HouseProjects.vue"
import TwoColumnsTable from "~/components/pages/construction/TwoColumnsTable.vue"
</script>

<style lang="scss" scoped></style>
