<template>
    <Section>
        <Container>
            <h4 class="infant-font">При проектировании дома <br /></h4>
            <h4 class="SecondTitle infant-font">
                мы согласовываем каждый этап, <br />
                чтобы получить идеальный результат
            </h4>
            <hr />
            <div class="grid grid-cols-2">
                <div class="column_1 span-1">
                    <p class="Number">01</p>
                    <p class="text">Определение целей и требований</p>
                </div>
                <div class="column_2 span-1"></div>
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
</script>

<style lang="scss" scoped>
h4 {
    margin-left: 673px;
}
.SecondTitle {
    margin-left: 525px;
}
.Column {
    margin-top: 70px;
}
.grid {
    margin-top: 50px;
    .column_1 {
        display: flex;

        .Number {
            margin-top: 50px;
            margin-bottom: 50px;
        }
        .text {
            margin-top: 50px;
            margin-left: 50px;
        }
    }
}
hr {
    margin-top: 50px;
}
</style>
