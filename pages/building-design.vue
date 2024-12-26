<template>
    <Layout>
        <PageHeader
            title="Индивидуальное<br> проектирование"
            description="От предварительного концептуального дизайна до готовой рабочей документации, гарантируя высокое качество и соответствие всем строительным нормам"
            button-label="Получить консультацию"
        />
        <section class="house-section">
            <img src="/img/building_design_bg.png" alt="building design" />
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <span class="col-start-3 text">Проектирование домов от 4 200 ₽/м2</span>
            </div>
        </section>

        <section class="set-service-section">
            <MainTitle>Проект, который точно<br />соответствует вашим пожеланиям и стандартам строительства</MainTitle>
            <div class="grid grid-cols-4">
                <div
                    class="card"
                    v-for="(item, key) in set_service"
                    :key="key"
                    :style="{
                        background: item.background,
                        color: item.color,
                        borderColor: item.color,
                        border: item.border,
                    }"
                >
                    <div class="first-row">
                        <h6 v-html="item.title"></h6>
                        <span>{{ item.number }}</span>
                    </div>
                    <div>{{ item.subtitle }}</div>
                </div>
            </div>
        </section>

        <section class="services-section">
            <MainTitle> Полный комплект проектных <br />услуг для строительства дома </MainTitle>
            <div v-for="(item, key) in services" :key="key" class="grid-element grid grid-cols-2">
                <h6 class="title">{{ item.title }}</h6>
                <div class="list">
                    <p v-for="(text, textKey) in item.list" :key="textKey">{{ text }}</p>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import PageHeader from "~/components/text/PageHeader.vue"

const set_service = [
    {
        title: "Индивидуальное <br>проектирование",
        subtitle: "Проектируем дома, учитывая особенности участка, климат и ваши предпочтения",
        number: "01",
        background: "none",
        color: "#212121",
        border: "1px solid",
    },
    {
        title: "Полный комплект <br>документов",
        subtitle: "Предоставляем всю необходимую техническую документацию с понятными чертежами и расчётами",
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
        subtitle: "Проекты соответствуют всем строительным нормам и требованиям",
        number: "04",
        background: "#18443E",
        color: "#FFFFFF",
        border: "none",
    },
]

const services = [
    {
        title: "Эскизный проект",
        list: ["Поэтажные планы", "Фасады", "Маркировочные планы", "Эскизы будущего экстерьера 3D"],
    },
    {
        title: "Архитектурный раздел",
        list: [
            "Разрез дома с высотными отметками",
            "Планы расстановки мебели",
            "План кровли",
            "Экспликация полов",
            "Основные строительные показатели",
            "Спецификация дверных и оконных проёмов",
            "Эскизы будущего экстерьера 3D",
        ],
    },
    {
        title: "Конструктивный раздел",
        list: [
            "Ведомость перемычек",
            "Объёмы основных строительных материалов",
            "Вентиляционные стояки",
            "Чертежи всех конструктивных элементов",
            "Сметный расчёт",
        ],
    },
    {
        title: "Отопление, водоснабжение и канализация",
        list: [
            "Планы систем отопления, водоснабжения, канализации",
            "Принципиальная схема обвязки котельной",
            "Спецификация оборудования, изделий, материалов 3D узлы для монтажа котельного оборудования (по необходимости)",
            "Сметный расчёт",
        ],
    },
    {
        title: "Вентиляция и кондиционирование",
        list: [
            "Схема прокладки вентиляционных трасс",
            "Поэтажные планы со схемами трасс кондиционирования, расположения вентиляционных дефлекторов",
            "Схемы монтажа вентиляционных установок",
            "Подбор/спецификация систем вентиляции, кондиционеров",
            "Сметный расчёт",
        ],
    },
    {
        title: "Электроснабжение и слаботочные системы",
        list: [
            "Линейная и монтажная схема электрощита",
            "Схема трассировки кабельных линий к потребителям (освещ., розетки и т.д.)",
            "Схема трассировки слаботочных кабельных линий (Internet, TV)",
            "Сметный расчёт",
        ],
    },
    {
        title: "Ландшафтный проект",
        list: [
            "Схема организации земельного участка",
            "Технико‐экономические показатели генплана",
            "Разбивочный план участка",
            "Схемы инженерных коммуникаций",
            "Визуализация участка 3D",
            "Сметный расчёт",
        ],
    },
]
</script>

<style lang="scss" scoped>
.house-section {
    position: relative;
    .grid {
        padding: 80px;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        .text {
            color: $white-color;
            font-size: 40px;
            font-weight: 400;
        }
    }
}

.services-section {
    padding: 80px;
    .grid-element {
        border-top: 1px solid $dark-color;
        gap: 30px;
        padding: 40px 0;
        align-items: center;
        .title {
            font-size: 40px;
        }
        .list {
            font-size: 20px;
            p {
                margin-bottom: 5px;
            }
        }
    }
}
.set-service-section {
    padding: 80px;
    .grid {
        gap: 20px;
        .card {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 300px;
            .first-row {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid;
                padding-bottom: 20px;
                align-items: center;
            }
        }
    }
}
</style>
