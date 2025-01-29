<template>
    <Layout>
        <PageHeader
            title="Отделка фасадов"
            description="Мы разрабатываем проект, подбираем материалы и выполняем все работы с гарантией. Вам не нужно беспокоиться о деталях — мы позаботимся обо всем"
            button-label="Записаться на консультацию"
        />
        <HouseSection src="/img/facade_finishing.png" />
        <AdvantagesSection />
        <TilesSection />
        <StyleSection />
        <FormSection>
            Записывайтесь на проект фасада<br />
            и точную смету на фасадные работы
        </FormSection>
        <ImageSliderSection />
        <FacadeMaterialsSection show-btn>
            <b class="text-primary">Выберите материалы</b>
            для будущего фасада
        </FacadeMaterialsSection>
    </Layout>
</template>

<script lang="ts" setup>
import Layout from "~/components/layout/Layout.vue"
import PageHeader from "~/components/text/PageHeader.vue"
import AdvantagesSection from "~/components/pages/facades/AdvantagesSection.vue"
import HouseSection from "~/components/pages/general/HouseSection.vue"
import TilesSection from "~/components/pages/facades/TilesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import StyleSection from "~/components/pages/facades/StyleSection.vue"
import ImageSliderSection from "~/components/pages/facades/ImageSliderSection.vue"
import FacadeMaterialsSection from "~/components/pages/general/FacadeMaterialsSection.vue"
</script>

<style lang="scss" scoped>
</style>
