<template>
    <Section>
        <Container>
            <h4 class="infant-font">При проектировании дома <br /></h4>
            <h4 class="SecondTitle infant-font">
                мы согласовываем каждый этап, <br />
                чтобы получить идеальный результат
            </h4>
            <hr />
            <div class="grid grid-cols-2">
                <div class="column_1 span-1">
                    <p class="Number">01</p>
                    <p class="text">Определение целей и требований</p>
                </div>
                <div class="column_2 span-1">
                    <p>
                        Уточнение бюджета, желаемого стиля, площади<br />
                        и функциональных характеристик
                    </p>
                </div>
            </div>
            <hr />
            <div class="grid grid-cols-2">
                <div class="column_1 span-1">
                    <p class="Number">02</p>
                    <p class="text">Выбор земельного участка</p>
                </div>
                <div class="column_2 span-1">
                    <p>
                        Поиск и покупка подходящего места под строительство,<br />
                        с учётом геологических и правовых аспектов
                    </p>
                </div>
            </div>
            <hr />
            <div class="grid grid-cols-2">
                <div class="column_1 span-1">
                    <p class="Number">03</p>
                    <p class="text">Проектирование</p>
                </div>
                <div class="column_2 span-1">
                    <p>
                        Предварительный проект: Создание концептуального<br />
                        дизайна с эскизами и планами; <br />Рабочая документация: Подробное проектирование,
                        <br />включая архитектурные чертежи, инженерные сети и сметы
                    </p>
                </div>
            </div>
            <hr />
            <div class="grid grid-cols-2">
                <div class="column_1 span-1">
                    <p class="Number">04</p>
                    <p class="text">Строительство</p>
                </div>
                <div class="column_2 span-1">
                    <p>
                        Подготовка участка, закладка фундамента с учётом<br />
                        проекта и геологии участка. Строительство стен<br />
                        и установка окон, монтаж кровли, установка<br />
                        водоснабжения, отопления, канализации<br />
                        и электричества
                    </p>
                </div>
            </div>
            <hr />
            <div class="grid grid-cols-2">
                <div class="column_1 span-1">
                    <p class="Number">05</p>
                    <p class="text">Ввод в эксплуатацию</p>
                </div>
                <div class="column_2 span-1">
                    <p>
                        Проведение финальных проверок и получение<br />
                        свидетельства о праве собственности
                    </p>
                </div>
            </div>
            <hr class="last_hr" />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
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
