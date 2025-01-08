<template>
    <Section :padding="0" class="house-section">
        <q-img :src="src" :ratio="21/9"/>
        <Container class="grid grid-cols-1 lg:grid-cols-3">
            <span class="col-start-3 text" v-html="title"></span>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
defineProps({
    title: {
        type: String,
    },
    src: {
        type: String
    }
})
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
            font-size: 30px;
            font-weight: 400;
        }
    }
}
</style>