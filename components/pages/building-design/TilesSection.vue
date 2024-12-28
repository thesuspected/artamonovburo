<template>
    <Section :padding="100">
        <Container>
            <MainTitle>Проект, который <b class="text-primary">точно<br />соответствует</b> вашим
                пожеланиям
                <br>и стандартам
                строительства
            </MainTitle>
            <TileBlocks :tiles="tiles" inner-class="lg:grid-cols-4" />
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
        title: "Индивидуальное <br>проектирование",
        subtitle: "Проектируем дома, учитывая <br>особенности участка, климат <br>и ваши предпочтения",
        number: "01",
        background: "none",
        color: "#212121",
        border: "1px solid",
    },
    {
        title: "Полный комплект <br>документов",
        subtitle: "Предоставляем всю необходимую техническую документацию <br>с понятными чертежами<br> и расчётами",
        number: "02",
        background: "#ECECEC",
        color: "#212121",
        border: "none",
    },
    {
        title: "Комплексный <br>подход",
        subtitle:
            "От идеи до реализации, включая архитектурное проектирование, инженерные системы, получение необходимых разрешений и строительство",
        number: "03",
        background: "none",
        color: "#212121",
        border: "1px solid",
    },
    {
        title: "Соответствие <br>стандартам",
        subtitle: "Проекты соответствуют всем строительным нормам <br>и требованиям",
        number: "04",
        background: "#18443E",
        color: "#FFFFFF",
        border: "none",
    },
]
</script>

<style lang="scss" scoped>
</style>