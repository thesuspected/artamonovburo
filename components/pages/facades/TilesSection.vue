<template>
    <Section :padding="100">
        <Container class="grid grid-cols-1">
            <MainTitle>
                Шаги, которые мы пройдём,<br />
                Чтобы <b class="text-primary">фасад вашего дома</b><br />
                стал воплощённой мечтой
            </MainTitle>
            <TileBlocks :tiles="tiles" inner-class="lg:grid-cols-3" />
        </Container>
    </Section>
</template>
<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import type { TilesType } from "~/components/pages/building-design/types"
import TileBlocks from "~/components/pages/general/TileBlocks.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"

const tiles: TilesType[] = [
    {
        title: "Исследование объекта<br> и подробная смета",
        subtitle:
            "Изучаем объект, проводим замеры и анкетирование. Определяем стиль и создаем 2-3 фотореалистичных 3D эскиза, чтобы вам было проще выбрать материал ",
        number: "01",
        background: "none",
        color: "#212121",
        border: "1px solid",
    },
    {
        title: "Заключение договора<br> и закупка материалов",
        subtitle:
            "Оплачивайте заказ термопанелей частями: первый взнос при заказе, второй — при доставке. Это позволяет гибко планировать бюджет",
        number: "02",
        background: "#ECECEC",
        color: "#212121",
        border: "none",
    },

    {
        title: "Строительные работы<br> и сдача объекта",
        subtitle:
            "Если после монтажа останутся неиспользованные панели, мы выкупим их обратно. Таким образом, вы избегаете лишних затрат",
        number: "03",
        background: "#18443E",
        color: "#FFFFFF",
        border: "none",
    },
]
</script>

<style lang="scss" scoped></style>
