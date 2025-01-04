<template>
    <Section>
        <Container class="grid grid-cols-3">
            <div class="sticky-block">
                <h3 class="infant-font">
                    Проекты домов <br>
                    готовые для <br>
                    строительства
                </h3>
                <p>
                    Вы сэкономите время, так как разработка <br>
                    индивидуального проекта не требуется, <br>
                    что способствует быстрому началу <br>
                    строительного процесса. <br>
                    <br>
                    Предварительно рассчитанные сметы <br>
                    помогают избежать перерасхода бюджета, <br>
                    обеспечивая экономию денежных средств
                </p>
            </div>
            <div class="house-block col-span-2">
                <div class="house-card">
                    <img src="/img/construction/house_1.png" alt="">
                    <!--  Контент с иконками и кнопками  -->
                    <div class="flex justify-between">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
</script>

<style lang="scss" scoped>
.grid {
    .sticky-block {
        h3 {
            margin-bottom: 30px;
        }

        p {

        }
    }

    .house-block {
        .house-card {

        }
    }
}
</style>