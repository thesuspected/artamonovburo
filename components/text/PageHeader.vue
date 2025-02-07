<template>
    <Section>
        <Container class="page-header grid grid-cols-1 lg:grid-cols-3">
            <component :is="isDesktop ? 'h3' : 'h4'" class="title infant-font lg:col-span-2" v-html="title"></component>
            <div class="info">
                <p>{{ description }}</p>
                <m-btn :label="buttonLabel" shine-effect @click="emit('click-btn')" />
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import useScreenController from "~/hooks/useScreenController"

const { isDesktop } = useScreenController()
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
const emit = defineEmits(["click-btn"])
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
