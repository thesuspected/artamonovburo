<template>
    <Section>
        <MainTitle class="title" max-width="700px">
            Реализуем проект от <b class="text-primary">идеи </b>
            до <b class="text-primary">готового ремонта</b>
        </MainTitle>

        <Container class="grid grid-cols-1 lg:grid-cols-3"
                   :style="`${isDesktop ? 'column-gap: 60px' : 'row-gap: 30px'}`">
            <div class="room-1">
                <q-img src="/img/interior-design/room_1.png" />
            </div>
            <div class="consultation-1 col-span-2" :style="`${isDesktop ? 'border-bottom: solid 1px #B1B1B1;' : ''}`">
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
                <m-btn class="button" label="Консультация" outline @click="handleOpenDialogEvent" />
            </div>
        </Container>
        <Container class="block-2 grid grid-cols-1 lg:grid-cols-2"
                   :style="`${isDesktop ? 'column-gap: 60px' : 'row-gap: 30px'}`">
            <div class="consultation-2"
                 :style="`${isDesktop ? 'border-bottom: solid 1px #B1B1B1;' : ''}`">
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
                    с первоначальной концепцией и замыслом дизайнера. <br />
                    <br />
                    Это также, позволяет избежать искажений и упрощений, <br />
                    которые могут возникнуть на стадии выполнения работ.
                </p>
                <m-btn class="button" label="Консультация" outline @click="handleOpenDialogEvent" />
            </div>
            <div class="room-2 -order-1 lg:order-1">
                <q-img src="/img/interior-design/room_2.png" />
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import { Events } from "~/plugins/event-bus"
import useScreenController from "~/hooks/useScreenController"

const { $event } = useNuxtApp()
const { isDesktop } = useScreenController()
const handleOpenDialogEvent = () => {
    $event(Events.open_form_dialog, "Строительство домов - Консультация")
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 50px;
}

.block-2 {
    margin-top: 50px;
}

.border-bottom {
    border-bottom: solid 1px $secondary-color;
}

.grid {
    gap: 50px;

    .consultation-1 {

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
    }

    .consultation-2 {

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
    }
}
</style>
