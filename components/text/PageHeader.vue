<template>
    <Section>
        <Container class="page-header grid grid-cols-1 lg:grid-cols-3">
            <h2 class="title infant-font lg:col-span-2" v-html="title"></h2>
            <div class="info">
                <p>{{ description }}</p>
                <m-btn :label="buttonLabel" shine-effect />
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"

defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    buttonLabel: {
        type: String,
    },
})
</script>

<style lang="scss" scoped>
.page-header {
    .info {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
}
</style>