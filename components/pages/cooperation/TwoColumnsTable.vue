<template>
    <Section :top="150">
        <Container>
            <MainTitle>
                <b class="text-primary">Инвестируйте</b> в застройку<br>перспективных объектов <b
                class="text-primary">с полным <br>сопровождением</b> проекта
            </MainTitle>
            <TwoColumnsTable :values="stages" with-numbers is-text-small />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import MainTitle from "~/components/text/MainTitle.vue"
import TwoColumnsTable from "../general/TwoColumnsTable.vue"

const stages = [
    {
        title: "Выбор проекта",
        list: ["Инвестор выбирает объект для вложений, основываясь на стиле, технологии и местоположении"],
    },
    {
        title: "Заключение договора",
        list: ["Подписание договора с индивидуальными условиями, включающими сумму вложений и этапы финансирования"],
    },
    {
        title: "Контроль строительства",
        list: ["Инвестор получает регулярные отчёты о ходе строительства с возможностью участия в ключевых решениях"],
    },
    {
        title: "Завершение и сдача объекта",
        list: ["Готовый объект передаётся инвестору в установленные сроки с оценкой его стоимости"],
    },
    {
        title: "Получение прибыли",
        list: ["Инвестор получает прибыль после продажи объекта"],
    },
]
</script>

<style lang="scss" scoped>
</style>