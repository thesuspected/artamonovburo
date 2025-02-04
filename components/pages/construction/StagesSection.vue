<template>
    <Section>
        <Container>
            <MainTitle
            >При проектировании дома<br>
                мы согласовываем каждый этап, <br>чтобы <b class="text-primary">получить идеальный результат</b>
            </MainTitle>
            <TwoColumnsTable :values="stages" with-numbers is-text-small class="grid grid-cols-1 lg:grid-cols-3" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import TwoColumnsTable from "../general/TwoColumnsTable.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"

const stages = [
    {
        title: "Определение целей и требований",
        list: ["Уточнение бюджета, желаемого стиля, площади и функциональных характеристик"],
    },
    {
        title: "Выбор земельного участка",
        list: ["Поиск и покупка подходящего места под строительство, с учётом геологических и правовых аспектов"],
    },
    {
        title: "Проектирование",
        list: [
            "Предварительный проект: Создание концептуального дизайна с эскизами и планами; Рабочая документация: Подробное проектирование, включая архитектурные чертежи, инженерные сети и сметы",
        ],
    },
    {
        title: "Строительство",
        list: [
            "Подготовка участка, закладка фундамента с учётом проекта и геологии участка. Строительство стен и установка окон, монтаж кровли, установка водоснабжения, отопления, канализации и электричества",
        ],
    },
    {
        title: "Ввод в эксплуатацию",
        list: ["Проведение финальных проверок и получение свидетельства о праве собственности"],
    },
]
</script>

<style lang="scss" scoped>
h4 {
    margin-left: 673px;
}

.SecondTitle {
    margin-left: 525px;
}

.Column {
    margin-top: 70px;
}

.grid {
    margin-top: 50px;

    .column_1 {
        display: flex;

        .Number {
            display: flex;
            align-items: center;
        }

        .text {
            display: flex;
            margin-left: 50px;
            align-items: center;
        }
    }

    .column_2 {
        display: flex;
    }
}

hr {
    margin-top: 50px;
}

.last_hr {
    margin-top: 40px;
}
</style>
