<template>
    <Section :padding="100">
        <Container>
            <MainTitle>Пошаговый процесс создания<br />дизайн-проекта вашего интерьера </MainTitle>
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
        title: "Планирование",
        subtitle:
            "Изучаем объект, проводим замеры и анкетирование. Определяем стиль и создаём 2–3 планировочных решения, учитывающих зонирование и ваш образ жизни",
        number: "01",
        background: "none",
        color: "#212121",
        border: "1px solid",
    },
    {
        title: "Визуализация",
        subtitle:
            "Разрабатываем концепцию интерьера: стиль, цвет, мебель, декор. Готовим 3D-визуализации с учётом бюджета, показывая детали будущего пространства",
        number: "02",
        background: "#ECECEC",
        color: "#212121",
        border: "none",
    },

    {
        title: "Техническая документация",
        subtitle:
            "Подготавливаем чертежи, списки материалов и адреса магазинов. Документация помогает прорабу точно реализовать проект, а вам — понимать итоговую стоимость",
        number: "03",
        background: "#18443E",
        color: "#FFFFFF",
        border: "none",
    },
]
</script>

<style lang="scss" scoped></style>
