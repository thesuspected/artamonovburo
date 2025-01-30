<template>
    <Section>
        <Container>
            <MainTitle
                >Постарались
                <b class="text-primary"
                    >ответить <br />
                    на вопросы</b
                >, которые вы чаще <br />
                всего задаёте
            </MainTitle>

            <q-list class="list grid grid-cols-1 lg:grid-cols-1" bordered>
                <div v-for="(item, key) in FAQ" :key="key">
                    <q-expansion-item
                        group="somegroup"
                        :label="item.question"
                        :default-opened="key == 0"
                        header-class="text-primary"
                        expand-icon="add"
                    >
                        <q-card class="card">
                            <q-card-section>
                                {{ item.answer }}
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>

                    <q-separator />
                </div>
            </q-list>
        </Container>
    </Section>
</template>
<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"

const FAQ = [
    {
        question: "Вопрос 1",
        answer: "Ответ 1",
    },
    {
        question: "Вопрос 2",
        answer: "Ответ 2",
    },
    {
        question: "Вопрос 3",
        answer: "Ответ 3",
    },
]
</script>

<style lang="scss" scoped>
.list {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.12);

    .card {
        background: none;
    }

    &:deep(.q-item) {
        height: 100px;
    }

    &:deep(.q-icon) {
        font-size: 33px;
    }
}
</style>
