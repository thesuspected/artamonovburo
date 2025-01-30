<template>
    <Section>
        <Container>
            <MainTitle>
                <b class="text-primary">Пройдите опрос</b>, чтобы<br />
                получить предварительную смету <br />
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
import { ref } from "vue"

const options = ref([
    {
        question: "Укажите приблизительную площадь вашего фасада",
        selected: 100,
        type: "slider",
        answers: [],
    },
    {
        question: "Сколько этажей в вашем доме?",
        selected: [],
        type: "checkbox",
        answers: [
            {
                label: "1 этаж",
                value: "Ответ 11",
            },
            {
                label: "2 этажа",
                value: "Ответ 22",
            },
            {
                label: "Есть пристройка (гараж или хоз. постройка)",
                value: "Ответ 33",
            },
            {
                label: "Есть мансарда",
                value: "Ответ 44",
            },
            {
                label: "Нет моего варианта",
                value: "Ответ 55",
            },
        ],
    },
    {
        question: "Укажите материал стен вашего дома",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "Кирпич",
                value: "Ответ 11",
            },
            {
                label: "Пенобетон/Газобетон",
                value: "Ответ 22",
            },
            {
                label: "Дерево",
                value: "Ответ 33",
            },
            {
                label: "ЖБИ-панели",
                value: "Ответ 44",
            },
            {
                label: "Другое",
                value: "Ответ 55",
            },
        ],
    },
    {
        question: "Хотите включить смету крепежные материалы для термопанелей (клей-пену)?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "Да, рассчитать полную смету с крепежом",
                value: "Ответ 11",
            },
            {
                label: "Нет, планирую приобрести крепеж самостоятельно",
                value: "Ответ 22",
            },
        ],
    },
    {
        question: "Нужна ли вам доставка панелей с нашего склада?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "Да, необходима доставка",
                value: "Ответ 11",
            },
            {
                label: "Нет, вывезу самостоятельно",
                value: "Ответ 22",
            },
            {
                label: "Зависит от стоимости",
                value: "Ответ 22",
            },
        ],
    },
    {
        question: "Как вы планируете монтировать панели на фасад?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "Монтаж своими силами",
                value: "Ответ 11",
            },
            {
                label: "Самостоятельно найму бригаду",
                value: "Ответ 22",
            },
            {
                label: "Необходим монтаж «под ключ»",
                value: "Ответ 33",
            },
            {
                label: "Хочу сравнить смету с монтажом и без",
                value: "Ответ 44",
            },
        ],
    },
])
</script>

<style lang="scss" scoped></style>
