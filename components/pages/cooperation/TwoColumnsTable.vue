<template>
    <Section :top="150">
        <Container>
            <MainTitle>
                <b class="text-primary">Инвестируйте</b> в застройку<br />перспективных объектов
                <b class="text-primary">с полным <br />сопровождением</b> проекта
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
        list: ["Мы проводим подробную  презентацию объектов под застройку в нашем офисе. Вы выбираете понравившийся"],
    },
    {
        title: "Заключение договора",
        list: ["Подписание договора с индивидуальными условиями, включающими сумму вложений и этапы финансирования"],
    },
    {
        title: "Контроль строительства",
        list: ["Инвестор получает регулярные отчёты о ходе строительства"],
    },
    {
        title: "Завершение строительства",
        list: [
            "Производим фото и видео-съемку готового объекта, выставляем на продажу, привлекаем партнеров риелторов",
        ],
    },
    {
        title: "Получение прибыли",
        list: ["Инвестор получает прибыль после продажи объекта"],
    },
]
</script>

<style lang="scss" scoped></style>
