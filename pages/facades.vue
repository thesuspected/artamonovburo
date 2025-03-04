<template>
    <Layout>
        <HeroSection
            background-image="/img/facade_finishing.jpg"
            background-position="bottom"
            @click-btn="handleOpenDialogEvent"
        >
            <template #title> Отделка фасадов</template>
            <template #subtitle>
                <div class="subtitle">
                    Мы разрабатываем проект, подбираем материалы <br />
                    и выполняем все работы с гарантией. Вам не нужно<br />
                    беспокоиться о деталях — мы позаботимся обо всем
                </div>
            </template>
        </HeroSection>
        <AdvantagesSection />
        <TilesSection />
        <StyleSection @click-btn="scrollToQuiz" />
        <FormSection from="Отделка фасадов - Обратная связь">
            Записывайтесь на <b class="text-primary">бесплатный</b> <br />
            3D проект фасада и расчет точной сметы
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

const { $event } = useNuxtApp()
const handleOpenDialogEvent = () => {
    $event(Events.open_form_dialog, "Отделка фасадов - Записаться на консультацию")
}
import { scrollToElement } from "~/utils/helpers"
import { Events } from "~/plugins/event-bus"

useSeoMeta({
    title: "Отделка фасадов - Архитектурно-строительное бюро Artamonov",
    description: "Используя знания о композиции, форме и цвете, создаём пространство для жизни в выбранном вами стиле",
    ogImage: "/img/facade_finishing.jpg",
})

const quizRef = ref()
const scrollToQuiz = () => {
    scrollToElement(quizRef.value.$el)
}
</script>

<style lang="scss" scoped>
.subtitle {
    font-size: 15px;
}
</style>
