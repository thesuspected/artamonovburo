<template>
    <Section>
        <Container>
            <TextQuote> Выберите <b class="text-primary">будущий стиль</b> вашего дома</TextQuote>
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div v-for="(item, key) in styles" :key="key" class="card">
                    <q-img :src="item.src" />
                    <div class="bottom">
                        <h5 class="infant-font" v-html="item.title" />
                        <p v-html="item.subtitle" class="subtitle"></p>
                        <m-btn label="Рассчитать стоимость" outline @click="emit('click-btn')" />
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import MBtn from "~/components/buttons/MBtn.vue"

const emit = defineEmits(["click-btn"])

const styles = [
    {
        title: "Английский",
        src: "/img/facades/english.png",
        subtitle:
            "<a href='/catalog'; style='color: #18443E; text-decoration: underline'> Клинкерная плитка </a> в сочетании  с <a href='/catalog'; style='color: #18443E; text-decoration: underline'>фасадным декором</a> в виде колонн, портиков, наличников и карнизов, подчёркивает симметрию и гармонию архитектуры",
    },
    {
        title: "Фахверк",
        src: "/img/facades/fahverk.png",
        subtitle:
            "<a href='/catalog'; style='color: #18443E; text-decoration: underline'>Имитация видимого деревянного каркаса</a>, который формирует структуру фасада с <a href='/catalog'; style='color: #18443E; text-decoration: underline'>декоративной штукатуркой</a>, ставнями и другими резными изделиями, выглядят уютно и гармонично, сочетая в себе элементы функциональности и эстетики",
    },
    {
        title: "Хай-тек",
        src: "/img/facades/hitech.png",
        subtitle:
            "<a href='/catalog'; style='color: #18443E; text-decoration: underline'>Декоративная штукатурка</a> и <a href='/catalog'; style='color: #18443E; text-decoration: underline'>топорные вставки из дерева или металла</a> акцентируют внимание на отсутствии излишеств. Элементы декора минимизированы, а акцент делается на функциональности",
    },
]
</script>

<style lang="scss" scoped>
.grid {
    gap: 40px;

    .card {
        display: flex;
        flex-direction: column;

        .bottom {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 40px 0;
            flex-grow: 1;
            .subtitle {
                :visited {
                    color: #18443e;
                }
            }
            .infant-font {
                font-size: 45px;
                line-height: 1.05;
            }

            p {
                flex-grow: 1;
            }
        }
    }
}
</style>
