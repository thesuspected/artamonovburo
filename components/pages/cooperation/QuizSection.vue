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

const options = ref([
    {
        question: "Вопрос 1",
        selected: undefined,
        answers: [
            {
                label: "Ответ 1",
                value: "Ответ 1",
            },
            {
                label: "Ответ 2",
                value: "Ответ 2",
            },
            {
                label: "Option 3",
                value: "Ответ 3",
            },
        ],
    },
    {
        question: "Вопрос 2",
        selected: undefined,
        answers: [
            {
                label: "Ответ 11",
                value: "Ответ 11",
            },
            {
                label: "Ответ 22",
                value: "Ответ 22",
            },
            {
                label: "Option 33",
                value: "Ответ 33",
            },
        ],
    },
])
</script>

<style lang="scss" scoped>
</style>