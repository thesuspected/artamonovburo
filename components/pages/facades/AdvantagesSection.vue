<template>
    <Section>
        <Container class="grid grid-cols-3">
            <div v-for="(item, key) in advantages" :key="key" class="advantage">
                <h5 class="infant-font" v-html="item.title" />
                <p v-html="item.subtitle"></p>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"

const advantages = [
    {
        title: "Особенный<br> подход",
        subtitle:
            "Мы способны предложить индивидуальные <br>решения, учитывающие особенности <br>здания и ваши пожелания",
    },
    {
        title: "Визуализация<br> фасада",
        subtitle: "Придадим дому стильный фасад <br>благодаря дизайнеру, который сделает<br> предварительный проект фасада",
    },
    {
        title: "Отделочные<br> бригады",
        subtitle:
            "Отделочники с большим опытом работы в сфере <br>сделают работу идеально, в соответствии <br>с проектом и строительными нормами",
    },
]
</script>

<style lang="scss" scoped>
.grid {
    gap: 40px;

    .advantage {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px 0;
        border-right: 1px solid $secondary-color;

        &:last-child {
            border: none;
        }

        .infant-font {
            font-size: 45px;
            line-height: 1.05;
        }
    }
}
</style>