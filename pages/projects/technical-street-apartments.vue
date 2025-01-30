<template>
    <div>
        <ProjectStickySection :title="project.title" :subtitle="project.subtitle">
            <q-img :src="project.src" :ratio="4 / 3" />
            <ProjectInfo :info="project.info" />
            <ProjectBlock v-for="(block, key) in project.blocks" :key="key" :data="block" />
        </ProjectStickySection>
    </div>
</template>

<script lang="ts" setup>
import ProjectStickySection from "~/components/pages/projects/ProjectStickySection.vue"
import ProjectBlock from "~/components/pages/projects/ProjectBlock.vue"
import type { ProjectType } from "~/components/pages/projects/types"
import ProjectInfo from "~/components/pages/projects/ProjectInfo.vue"

const project: ProjectType = {
    title: `Саратов |<br>
            Техническая /<br>
            Название?`,
    subtitle: `Пример примерыч: Дом выполнен из камня.<br>
               На первом этаже спальная комната, <br>
               кухня-гостиная с мягкой зоной и камином. <br>
               На втором две спальные комнаты`,
    src: "/img/projects/technical-street-apartments/main_image.png",
    info: [
        {
            name: "Площадь",
            value: "68 м2",
        },
        {
            name: "Бюджет/Стоимость",
            value: "10 млн",
        },
        {
            name: "Срок реализации",
            value: "2 мес",
        },
        {
            name: "Год реализации проекта",
            value: "2024 г",
        },
    ],
    blocks: [
        {
            title: "Кухня-гостинная",
            subtitle: `Мебель выбирали преимущественно скандинавских брендов.<br>
            Плюс в том, что имея небольшие габариты, она выглядит одновременно<br>
            современной и традиционной, визуально не утяжеляет интерьер`,
            images: [
                {
                    src: "/img/projects/technical-street-apartments/kitchen_1.png",
                    rows: 3,
                    cols: 7,
                    alt: "Кухня 1",
                },
                {
                    src: "/img/projects/technical-street-apartments/kitchen_2.png",
                    rows: 1,
                    cols: 5,
                    alt: "Кухня 2",
                },
                {
                    src: "/img/projects/technical-street-apartments/kitchen_3.png",
                    rows: 2,
                    cols: 5,
                    alt: "Кухня 3",
                },
            ],
        },
        {
            title: "Спальня",
            subtitle: `Мебель выбирали преимущественно скандинавских брендов. Плюс<br>
            в том, что имея небольшие габариты, она выглядит одновременно<br>
            современной и традиционной, визуально не утяжеляет интерьер`,
            images: [
                {
                    src: "/img/projects/technical-street-apartments/bedroom_1.png",
                    rows: 2,
                    cols: 6,
                    alt: "Спальня 1",
                },
                {
                    src: "/img/projects/technical-street-apartments/bedroom_2.png",
                    rows: 2,
                    cols: 6,
                    alt: "Спальня 2",
                },
                {
                    src: "/img/projects/technical-street-apartments/bedroom_3.png",
                    rows: 1,
                    cols: 3,
                    alt: "Спальня 3",
                },
                {
                    src: "/img/projects/technical-street-apartments/bedroom_4.png",
                    rows: 1,
                    cols: 3,
                    alt: "Спальня 4",
                },
                {
                    src: "/img/projects/technical-street-apartments/bedroom_5.png",
                    rows: 1,
                    cols: 6,
                    alt: "Спальня 5",
                },
            ],
        },
        {
            title: "Ванная",
            subtitle: "",
            images: [
                {
                    src: "/img/projects/technical-street-apartments/bathroom_1.png",
                    rows: 3,
                    cols: 6,
                    alt: "Ванная 1",
                },
                {
                    src: "/img/projects/technical-street-apartments/bathroom_2.png",
                    rows: 3,
                    cols: 6,
                    alt: "Ванная 2",
                },
            ],
        },
        {
            title: "Детская",
            subtitle: `Мебель выбирали преимущественно скандинавских брендов. Плюс<br>
             в том, что имея небольшие габариты, она выглядит одновременно<br>
             современной и традиционной, визуально не утяжеляет интерьер`,
            images: [
                {
                    src: "/img/projects/technical-street-apartments/childrenroom_1.png",
                    rows: 2,
                    cols: 6,
                    alt: "Детская 1",
                },
                {
                    src: "/img/projects/technical-street-apartments/childrenroom_2.png",
                    rows: 2,
                    cols: 6,
                    alt: "Детская 2",
                },
                {
                    src: "/img/projects/technical-street-apartments/childrenroom_3.png",
                    rows: 1,
                    cols: 3,
                    alt: "Детская 3",
                },
                {
                    src: "/img/projects/technical-street-apartments/childrenroom_4.png",
                    rows: 1,
                    cols: 6,
                    alt: "Детская 4",
                },
                {
                    src: "/img/projects/technical-street-apartments/childrenroom_5.png",
                    rows: 1,
                    cols: 3,
                    alt: "Детская 5",
                },
            ],
        },
        {
            title: "Кабинет",
            subtitle: `Мебель выбирали преимущественно скандинавских брендов. Плюс<br>
            в том, что имея небольшие габариты, она выглядит одновременно<br>
            современной и традиционной, визуально не утяжеляет интерьер`,
            images: [
                {
                    src: "/img/projects/technical-street-apartments/office_1.png",
                    rows: 3,
                    cols: 6,
                    alt: "Кабинет 1",
                },
                {
                    src: "/img/projects/technical-street-apartments/office_2.png",
                    rows: 2,
                    cols: 6,
                    alt: "Кабинет 2",
                },
                {
                    src: "/img/projects/technical-street-apartments/office_3.png",
                    rows: 1,
                    cols: 6,
                    alt: "Кабинет 3",
                },
            ],
        },
    ],
}
</script>

<style lang="scss" scoped></style>
