<template>
    <Section>
        <Container>
            <MainTitle>
                <b class="text-primary">Пройдите опрос</b>, чтобы<br>
                получить предварительную смету <br>
                на строительство вашего дома
            </MainTitle>

            <Quiz :quiz-options="options" />
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
                value: "Ответ 11",
            },
            {
                label: "Газобетон",
                value: "Ответ 22",
            },
            {
                label: "Газоблок+кирпич",
                value: "Ответ 33",
            },
            {
                label: "Монолит",
                value: "Ответ 44",
            },
            {
                label: "Пока не определился, нужна консультация",
                value: "Ответ 55",
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
                value: "Ответ 11",
            },
            {
                label: "В ипотеку",
                value: "Ответ 22",
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
                value: "Ответ 11",
            },
            {
                label: "Участок еще не куплен",
                value: "Ответ 22",
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
                value: "Ответ 11",
            },
            {
                label: "Через 1-3 месяца",
                value: "Ответ 22",
            },
            {
                label: "Через 3-6 месяцев",
                value: "Ответ 33",
            },
            {
                label: "Не знаю, нужна консультация",
                value: "Ответ 44",
            },
        ],
    },
])
</script>

<style lang="scss" scoped></style>
