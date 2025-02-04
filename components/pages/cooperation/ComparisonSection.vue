<template>
    <Section>
        <Container>
            <MainTitle>
                <b class="text-primary">Мы строим уникальные объекты</b><br>
                и не предлагаем инвестировать <br>
                в типовую однообразную застройку
            </MainTitle>
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="house_1 col-span-1">
                    <img src="/public/img/cooperation/Comparison_1.png" alt="" />
                    <h3 class="infant-font">
                        Что предлагают <br>
                        другие компании
                    </h3>
                    <p>
                        Массовые решения, приводят к чрезмерной конкуренции на рынке. <br>
                        Переизбыток таких предложений влияет на их цену, <br>
                        что отрицательно сказывается на доходности и сроках реализации
                    </p>
                </div>
                <div class="house_2 col-span-1">
                    <img src="/public/img/cooperation/Comparison_2.png" alt="" />
                    <h3 class="infant-font">
                        Что предлагает <br>
                        наша компания
                    </h3>
                    <p>
                        Благодаря ограниченности предложения такая архитектура <br>
                        имеет высокий спрос, поэтому уникальные объекты сохраняют <br>
                        и даже увеличивают свою стоимость со временем
                    </p>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
</script>

<style lang="scss" scoped>
.grid {
    gap: 15px;

    .house_1 {
        p {
            margin-top: 20px;
        }
    }

    .house_2 {
        p {
            margin-top: 20px;
        }
    }
}

.infant-font {
    margin-top: 20px;
}
</style>
