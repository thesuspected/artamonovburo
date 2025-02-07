<template>
    <Layout>
        <HeroSection background-image="/img/facade_finishing.jpg" background-position="bottom">
            <template #title>
                Отделка фасадов
            </template>
            <template #subtitle>
                Мы разрабатываем проект, подбираем материалы <br>
                и выполняем все работы с гарантией. Вам не нужно<br>
                беспокоиться о деталях — мы позаботимся обо всем
            </template>
        </HeroSection>
        <AdvantagesSection />
        <TilesSection />
        <StyleSection @click-btn="scrollToQuiz" />
        <FormSection>
            Записывайтесь на проект фасада<br>
            и точную смету на фасадные работы
        </FormSection>
        <ImageSliderSection />
        <!--        <FacadeMaterialsSection show-btn>-->
        <!--            <b class="text-primary">Выберите материалы</b>-->
        <!--            для будущего фасада-->
        <!--        </FacadeMaterialsSection>-->
        <FacadeQuiz ref="quizRef" />
    </Layout>
</template>

<script lang="ts" setup>
import AdvantagesSection from "~/components/pages/facades/AdvantagesSection.vue"
import TilesSection from "~/components/pages/facades/TilesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import StyleSection from "~/components/pages/facades/StyleSection.vue"
import ImageSliderSection from "~/components/pages/facades/ImageSliderSection.vue"
import FacadeQuiz from "~/components/pages/facades/FacadeQuiz.vue"
import HeroSection from "~/components/pages/general/HeroSection.vue"
import { scrollToElement } from "~/utils/helpers"

const quizRef = ref()
const scrollToQuiz = () => {
    scrollToElement(quizRef.value.$el)
}
</script>

<style lang="scss" scoped></style>
