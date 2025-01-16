<template>
    <Section>
        <MainTitle class="title"
            >Реализуем проект от <b>идеи </b><br />
            до <b>готового ремонта</b></MainTitle>
        <Container class="grid grid-cols-3">
            <div class="room-1 col-span-1"><img src="/public/img/interior-design/room_1.png" /></div>
            <div class="consultation-1 col-span-2">
                <p class="mainTitle">Дизайн-проект</p>
                <ul>
                    <li>Размерный план с расстановкой мебели</li>
                    <li>План напольных покрытий</li>
                    <li>План потолков</li>
                    <li>План электрического оборудования</li>
                    <li>План сантехнического оборудования</li>
                    <li>План с указанием развёрток развёртки стен по помещениям</li>
                    <li>Фотореалистичные визуализации по каждому помещению</li>
                    <li>Спецификации осветительных приборов, мебели и оборудования</li>
                </ul>
                <m-btn class="button" label="Консультация" outline />
            </div>
        </Container>
        <Container class="grid grid-cols-2">
            <div class="consultation-2 col-span-1">
                <p class="mainTitle">Авторский надзор</p>
                <ul>
                    <li>Проверка соответствия выполненных работ проектным решениям</li>
                    <li>Контроль над закупкой материалов и оборудования</li>
                    <li>Внесение согласованных корректировок в проектную документацию</li>
                </ul>
                <p class="description">
                    Авторский надзор в нашей компании является неотъемлемой частью <br />
                    разработки дизайна интерьера. Это помогает гарантировать, <br />
                    что все элементы интерьера реализуются в соответствии <br />
                    с первоначальной концепцией и замыслом дизайнера. Также, позволяет <br />
                    избежать искажений и упрощений, которые могут возникнуть на стадии <br />
                    выполнения работ.
                </p>
                <m-btn class="button" label="Консультация" outline />
            </div>
            <div class="room-2 col-span-1"><img src="/public/img/interior-design/room_2.png" /></div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
</script>

<style lang="scss" scoped>
.title {
    margin-top: 150px;
}
.grid {
    margin-top: 50px;

    .consultation-1 {
        border-bottom: solid 1px;

        .button {
            margin-top: 15px;
        }
        .mainTitle {
            font-size: 30px;
        }
        margin-left: 70px;
        ul {
            padding-left: 20px;
            list-style: disc;

            li {
                margin-bottom: 10px;
            }
        }
        .mainTitle {
            font-size: 40px;
        }
    }
    .consultation-2 {
        border-bottom: solid 1px;
        margin-right: 100px;
        .description {
            margin-top: 40px;
        }

        .button {
            margin-top: 15px;
        }
        .mainTitle {
            font-size: 30px;
        }

        ul {
            padding-left: 20px;
            list-style: disc;
            li {
                margin-bottom: 10px;
            }
        }
        .mainTitle {
            font-size: 40px;
        }
    }
}
</style>
