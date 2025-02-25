<template>
    <Section>
        <Container class="grid grid-cols-1 lg:grid-cols-3">
            <div class="sticky-block" :style="`position: ${isDesktop ? 'sticky' : 'block'}`">
                <NuxtLink to="/interior-design" class="link">
                    <q-icon name="fa-solid fa-chevron-left" color="primary" />
                    <span class="text-primary">Назад</span>
                </NuxtLink>
                <h3 class="infant-font" v-html="title" />
                <p v-html="subtitle" />
            </div>
            <div class="projects-block col-span-2">
                <slot />
            </div>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import useScreenController from "~/hooks/useScreenController"

defineProps({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
})
const { isDesktop } = useScreenController()
</script>

<style lang="scss" scoped>
.grid {
    .sticky-block {
        top: 160px;
        align-self: self-start;

        .link {
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 10px 0;
            position: absolute;
            top: -40px;
        }

        h3 {
            margin-bottom: 30px;
        }

        p {
        }
    }
}
</style>
