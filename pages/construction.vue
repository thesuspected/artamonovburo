<template>
    <Layout>
        <PageHeader
            title="Строительство 
            <br> домов в Саратове"
            description="Воспользуйтесь готовым проверенным решением или создайте уникальный дом по вашим пожеланиям"
            button-label="Рассчитать стоимость"
            @click-btn="scrollToQuiz"
        />
        <ProjectsSection />
        <StagesSection />
        <FormSection from="Строительство домов - Обратная связь">
            Вместе создадим<b class="text-primary"> дом</b>,<br>
            который <b class="text-primary">будет соответствовать</b><br>
            вашим<b class="text-primary"> ожиданиям </b> и предпочтениям
        </FormSection>
        <QuizSection ref="quizRef" />
    </Layout>
</template>

<script lang="ts" setup>
import PageHeader from "~/components/text/PageHeader.vue"
import ProjectsSection from "~/components/pages/construction/ProjectsSection.vue"
import StagesSection from "~/components/pages/construction/StagesSection.vue"
import FormSection from "~/components/pages/general/FormSection.vue"
import QuizSection from "~/components/pages/construction/QuizSection.vue"
import { scrollToElement } from "~/utils/helpers"

useSeoMeta({
    title: "Строительство домов - Архитектурно-строительное бюро Artamonov",
    description: "Вместе создадим дом, который будет соответствовать вашим ожиданиям и предпочтениям",
    ogImage: "/img/construction/house_5.png",
})

const quizRef = ref()
const scrollToQuiz = () => {
    scrollToElement(quizRef.value.$el)
}
</script>

<style lang="scss" scoped></style>
