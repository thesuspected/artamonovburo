<template>
    <Layout>
        <HeroSection />
        <ServicesSection />
    </Layout>
</template>

<script lang="ts" setup>
import HeroSection from "~/components/pages/app/HeroSection.vue"
import ServicesSection from "~/components/pages/app/ServicesSection.vue"

useSeoMeta({
    title: "Архитектурно-строительное бюро Artamonov",
    description: "Создаём комфорт, меняя пространство. Возьмём на себя 100% работ от проектирования дома до благоустройства участка",
    ogImage: "/img/main_home.png",
})
</script>

<style lang="scss" scoped>
</style>