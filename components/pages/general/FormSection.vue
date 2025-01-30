<template>
    <Section>
        <MainTitle>
            <slot />
        </MainTitle>
        <Container :max-width="1200" class="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div class="image-container">
                <q-img class="image" :src="src" :ratio="1">
                    <h3 class="infant-font title">Обратная связь</h3>
                </q-img>
            </div>
            <Form />
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import MainTitle from "~/components/text/MainTitle.vue"
import Form from "./Form.vue"

defineProps({
    src: {
        type: String,
        default: "img/building-design/form-house.png",
    },
})

const form = ref({
    name: undefined,
    phone: undefined,
})
</script>

<style lang="scss" scoped>
.grid {
    padding: 60px;
    gap: 60px;
    --b: 2px; /* thickness of the border */
    --c: rgba(24, 68, 62, 0.5); /* color of the border */
    --w: 80px; /* width of border */

    border: var(--b) solid #0000; /* space for the border */
    --_g: #0000 90deg, var(--c) 0;
    --_p: var(--w) var(--w) border-box no-repeat;
    background: conic-gradient(from 90deg at top var(--b) left var(--b), var(--_g)) 0 0 / var(--_p),
        conic-gradient(from 180deg at top var(--b) right var(--b), var(--_g)) 100% 0 / var(--_p),
        conic-gradient(from 0deg at bottom var(--b) left var(--b), var(--_g)) 0 100% / var(--_p),
        conic-gradient(from -90deg at bottom var(--b) right var(--b), var(--_g)) 100% 100% / var(--_p);

    .image-container {
        position: relative;

        .image {
            margin-left: -20px;
            margin-top: -20px;
        }

        &:before {
            content: "";
            position: absolute;
            background: $primary-color;
            top: 0;
            left: 0;
            bottom: -20px;
            right: -20px;
            z-index: -1;
        }

        .title {
            font-size: 40px;
            padding-top: 40px;
            padding-left: 40px;
            padding-bottom: 120px;
            color: $white-color;
            font-weight: 500;
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 40px;

        .sub-text {
            font-size: 12px;
            font-weight: 300;
        }
    }
}
</style>
