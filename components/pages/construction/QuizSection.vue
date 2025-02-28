<template>
    <Section>
        <Container>
            <MainTitle>
                <b class="text-primary">Пройдите опрос</b>, чтобы<br />
                получить предварительную смету <br />
                на строительство вашего дома
            </MainTitle>

            <Quiz :quiz-options="options" from="Строительство домов - Квиз" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import MainTitle from "~/components/text/MainTitle.vue"
import Quiz from "~/components/pages/general/Quiz.vue"
import type { QuizType } from "~/components/pages/general/types"

const options = ref<QuizType[]>([
    {
        question: "Какую общую площадь Вы рассматриваете?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "До 100 м²",
                value: "До 100 м²",
            },
            {
                label: "100-150 м²",
                value: "100-150 м²",
            },
            {
                label: "150-200 м²",
                value: "150-200 м²",
            },
            {
                label: "Больше 200 м²",
                value: "Больше 200 м²",
            },
        ],
    },
    {
        question: "Из какого материала будем строить дом?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "Кирпич",
                value: "Кирпич",
            },
            {
                label: "Газобетон",
                value: "Газобетон",
            },
            {
                label: "Газоблок + кирпич",
                value: "Газоблок + кирпич",
            },
            {
                label: "Монолит",
                value: "Монолит",
            },
            {
                label: "Пока не определился, нужна консультация",
                value: "Пока не определился, нужна консультация",
            },
        ],
    },
    {
        question: "За какие средства планируете строить дом?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "За наличные средства",
                value: "За наличные средства",
            },
            {
                label: "В ипотеку",
                value: "В ипотеку",
            },
        ],
    },
    {
        question: "Вы купили участок?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "Да",
                value: "Да",
            },
            {
                label: "Участок еще не куплен",
                value: "Участок еще не куплен",
            },
        ],
    },
    {
        question: "Когда Вы планируете строительство?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "В ближайшее время",
                value: "В ближайшее время",
            },
            {
                label: "Через 1-3 месяца",
                value: "Через 1-3 месяца",
            },
            {
                label: "Через 3-6 месяцев",
                value: "Через 3-6 месяцев",
            },
            {
                label: "Не знаю, нужна консультация",
                value: "Не знаю, нужна консультация",
            },
        ],
    },
])
</script>

<style lang="scss" scoped></style>
