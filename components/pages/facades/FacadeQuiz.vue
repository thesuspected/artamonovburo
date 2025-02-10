<template>
    <Section>
        <Container>
            <MainTitle>
                <b class="text-primary">Пройдите опрос</b>, чтобы<br>
                получить предварительную смету <br>
                на отделку фасада вашего дома
            </MainTitle>

            <Quiz :quiz-options="options" from="Отделка фасадов - Квиз" />
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
                value: "1 этаж",
            },
            {
                label: "2 этажа",
                value: "2 этажа",
            },
            {
                label: "Есть пристройка (гараж или хоз. постройка)",
                value: "Есть пристройка (гараж или хоз. постройка)",
            },
            {
                label: "Есть мансарда",
                value: "Есть мансарда",
            },
            {
                label: "Нет моего варианта",
                value: "Нет моего варианта",
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
                value: "Кирпич",
            },
            {
                label: "Пенобетон/Газобетон",
                value: "Пенобетон/Газобетон",
            },
            {
                label: "Дерево",
                value: "Дерево",
            },
            {
                label: "ЖБИ-панели",
                value: "ЖБИ-панели",
            },
            {
                label: "Другое",
                value: "Другое",
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
                value: "Да, рассчитать полную смету с крепежом",
            },
            {
                label: "Нет, планирую приобрести крепеж самостоятельно",
                value: "Нет, планирую приобрести крепеж самостоятельно",
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
                value: "Да, необходима доставка",
            },
            {
                label: "Нет, вывезу самостоятельно",
                value: "Нет, вывезу самостоятельно",
            },
            {
                label: "Зависит от стоимости",
                value: "Зависит от стоимости",
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
                value: "Монтаж своими силами",
            },
            {
                label: "Самостоятельно найму бригаду",
                value: "Самостоятельно найму бригаду",
            },
            {
                label: "Необходим монтаж «под ключ»",
                value: "Необходим монтаж «под ключ»",
            },
            {
                label: "Хочу сравнить смету с монтажом и без",
                value: "Хочу сравнить смету с монтажом и без",
            },
        ],
    },
])
</script>

<style lang="scss" scoped></style>
