<template>
    <Section>
        <Container class="grid grid-cols-3">
            <div class="sticky-block">
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
import MBtn from "~/components/buttons/MBtn.vue"

defineProps({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
})
</script>

<style lang="scss" scoped>
.grid {
    .sticky-block {
        position: sticky;
        top: 15px;
        align-self: self-start;

        h3 {
            margin-bottom: 30px;
        }

        p {
        }
    }
}
</style>
