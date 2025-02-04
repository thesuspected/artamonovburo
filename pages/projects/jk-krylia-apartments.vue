<template>
    <Layout>
        <ProjectStickySection :title="project.title" :subtitle="project.subtitle">
            <q-img :src="project.src" :ratio="4 / 3" />
            <ProjectInfo :info="project.info" />
            <ProjectBlock v-for="(block, key) in project.blocks" :key="key" :data="block" />
        </ProjectStickySection>
    </Layout>
</template>

<script lang="ts" setup>
import ProjectStickySection from "~/components/pages/projects/ProjectStickySection.vue"
import ProjectBlock from "~/components/pages/projects/ProjectBlock.vue"
import type { ProjectType } from "~/components/pages/projects/types"
import ProjectInfo from "~/components/pages/projects/ProjectInfo.vue"

const project: ProjectType = {
    title: `Саратов |<br>
            ЖК Крылья /<br>
            Пентхаус с террасой`,
    subtitle: `
Двухуровневая квартира с просторной террасой создавалась для молодой прогрессивной пары <br> с 2-мя сыновьями младшего школьного возраста.
<br>Дом с эффектом уверенной стабильности.
<br>Просторная гардеробная с мойкой для обуви, <br>2 санузла, постирочная, 3 спальни, кухня-столовая <br> и гостиная с гейм зоной - все разместилось органично <br> и, благодаря применению передовых технологий и материалов, и создает состояние спокойного <br> и четкого взгляда в будущее.
`,
    src: "/img/projects/jk-krylia-apartments/main_image.jpg",
    info: [
        {
            name: "Площадь",
            value: "260 м2",
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
            title: "Прихожая, кухня-гостиная",
            subtitle: `Выбор пал на сочетание матового черного, примененного в фасадах кухни, покрытии стола и декоративной штукатурке прихожей, теплого дерева ореха, белых стен и белого мрамора на полу с яркими природными акцентами в тканях. <br> <br>
Встроенные трековые системы освещения и двери в потолок вписались своей минималистичностью в поставленную задачу. <br><br>
Весь интерьер построен на ощущении свободы, связи с природой и ярких моментах отражающих темперамент жильцов
`,
            images: [
                {
                    src: "/img/projects/jk-krylia-apartments/kitchen_1.jpg",
                    rows: 3,
                    cols: 7,
                    alt: "Кухня 1",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/kitchen_2.jpg",
                    rows: 1,
                    cols: 5,
                    alt: "Кухня 2",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/kitchen_3.jpg",
                    rows: 2,
                    cols: 5,
                    alt: "Кухня 3",
                },
            ],
        },
        {
            title: "Постирочная",
            subtitle: `Хозяин дома очень увлечен хоккеем, поэтому одним из главных атрибутов постирочной является сушильный шкаф для одежды, ну и однозначно наличие стиральной и сушильной машин. <br><br>
По совместительству сея комната выполняет также функцию гостевого санузла. <br><br>
Природный принт графитового керамогранита под мрамор и деревянные поверхности создают эффект упорядоченности. <br><br>
`,
            images: [
                {
                    src: "/img/projects/jk-krylia-apartments/washingroom_1.jpg",
                    rows: 3,
                    cols: 7,
                    alt: "Постирочная 1",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/washingroom_2.jpg",
                    rows: 1,
                    cols: 5,
                    alt: "Постирочная 2",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/washingroom_3.jpg",
                    rows: 2,
                    cols: 5,
                    alt: "Постирочная 3",
                },
            ],
        },
        {
            title: "Санузел",
            subtitle: `В общем санузле спального второго этажа ребята выбрали расположить душевую, т.к. в большей степени он создавался для мальчишек - выбрали черную мелкоформатную плитку с фактурой и бело-зеленую с абстрактным принтом. <br><br>
также оснастили 2мя мятного цвета раковинами и унитазом в тон. <br><br>
в деталях использовали душевую систему изливом в виде ведра с подсветкой.
`,
            images: [
                {
                    src: "/img/projects/jk-krylia-apartments/bathroom_2.jpg",
                    rows: 3,
                    cols: 7,
                    alt: "Санузел 1",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/bathroom_1.jpg",
                    rows: 1,
                    cols: 5,
                    alt: "Санузел 2",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/bathroom_3.jpg",
                    rows: 2,
                    cols: 5,
                    alt: "Санузел 3",
                },
            ],
        },
        {
            title: "Детские",
            subtitle: `В обеих детских применили те же природные оттенки и современные материалы.`,
            images: [
                {
                    src: "/img/projects/jk-krylia-apartments/childrenroom_1.jpg",
                    rows: 2,
                    cols: 6,
                    alt: "Детская 1",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/childrenroom_2.jpg",
                    rows: 2,
                    cols: 6,
                    alt: "Детская 2",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/childrenroom_3.jpg",
                    rows: 1,
                    cols: 3,
                    alt: "Детская 3",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/childrenroom_4.jpg",
                    rows: 1,
                    cols: 6,
                    alt: "Детская 4",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/childrenroom_5.jpg",
                    rows: 1,
                    cols: 3,
                    alt: "Детская 5",
                },
            ],
        },
        {
            title: "Мастер-спальня",
            subtitle: `Личное пространство хозяев оснащено всем необходимым для комфортного независимого пребывания: кровать с шириной матраса 1,8, тв зона, гардероб, отдельностоящая ванная вальяжно расположившаяся у панорамных окон, зоной душевой и санузла, выполненными посредством стеклянного ограждения, будуарной зоной на удлиненной столешнице умывальника.`,
            images: [
                {
                    src: "/img/projects/jk-krylia-apartments/bedroom_1.jpg",
                    rows: 2,
                    cols: 6,
                    alt: "Спальня 1",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/bedroom_2.jpg",
                    rows: 2,
                    cols: 6,
                    alt: "Спальня 2",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/bedroom_3.jpg",
                    rows: 1,
                    cols: 3,
                    alt: "Спальня 3",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/bedroom_4.jpg",
                    rows: 1,
                    cols: 6,
                    alt: "Спальня 4",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/bedroom_5.jpg",
                    rows: 1,
                    cols: 3,
                    alt: "Спальня 5",
                },
            ],
        },
        {
            title: "Терраса",
            subtitle: `Просторное уличное пространство оснастили 3мя зонами: обеденной, зоной отдыха и спортивной.`,
            images: [
                {
                    src: "/img/projects/jk-krylia-apartments/terrace_1.jpg",
                    rows: 2,
                    cols: 6,
                    alt: "Терраса 1",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/terrace_2.jpg",
                    rows: 2,
                    cols: 6,
                    alt: "Терраса 2",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/terrace_3.jpg",
                    rows: 1,
                    cols: 3,
                    alt: "Терраса 3",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/terrace_4.jpg",
                    rows: 1,
                    cols: 6,
                    alt: "Терраса 4",
                },
                {
                    src: "/img/projects/jk-krylia-apartments/terrace_5.jpg",
                    rows: 1,
                    cols: 3,
                    alt: "Терраса 5",
                },
            ],
        },
    ],
}
</script>

<style lang="scss" scoped></style>
