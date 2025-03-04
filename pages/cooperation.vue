<template>
    <Layout>
        <HeroSection
            background-image="/img/cooperation/cooperation.jpeg"
            button-label="Подробнее"
            @click-btn="handleOpenDialogEvent"
        >
            <template #title> Инвестиции в застройку</template>
            <template #subtitle> Предлагаем 30% годовых с входом от 300.000 рублей </template>
        </HeroSection>
        <TwoColumnsTable />
        <ComparisonSection />
        <FinanceProjectsSection />
        <FormSection :src="src" from="Сотрудничество - Обратная связь">
            <b class="text-primary">Уникальные возможности</b> <br />
            для инвестирования в застройку, <br />
            которые <b class="text-primary">гарантируют</b> стабильную<br />
            и <b class="text-primary">высокую доходность</b>
        </FormSection>
    </Layout>
</template>

<script lang="ts" setup>
import TwoColumnsTable from "~/components/pages/cooperation/TwoColumnsTable.vue"
import ComparisonSection from "~/components/pages/cooperation/ComparisonSection.vue"
import FinanceProjectsSection from "~/components/pages/cooperation/FinanceProjectsSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import HeroSection from "~/components/pages/general/HeroSection.vue"
import { Events } from "~/plugins/event-bus"

const { $event } = useNuxtApp()
const handleOpenDialogEvent = () => {
    $event(Events.open_form_dialog, "Сотрудничество - Подробнее")
}
defineProps({
    src: {
        type: String,
        default: "img/cooperation/expert.png",
    },
})

useSeoMeta({
    title: "Сотрудничество - Архитектурно-строительное бюро Artamonov",
    description:
        "Предлагаем лучшие условия для сотрудничества и инвестиций в застройку, обеспечивая надёжные партнёрские отношения",
    ogImage: "/img/cooperation/cooperation.jpeg",
})
</script>

<style lang="scss" scoped></style>
