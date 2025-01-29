<template>
    <Section>
        <Container>
            <q-dialog v-model="localValue">
                <q-card>
                    <q-card-section class="row items-center q-pb-none">
                        <div class="text-h6"></div>
                        <q-space />
                        <q-btn icon="close" flat round dense v-close-popup />
                    </q-card-section>

                    <q-card-section>
                        <Form />
                    </q-card-section>
                </q-card>
            </q-dialog>
        </Container>
    </Section>
</template>

<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import Form from "./Form.vue"
import { defineProps } from "vue"
import { toRef } from "vue"
const props = defineProps({
    modelValue: {
        type: Boolean,
    },
})
const localValue = toRef(props, "modelValue")
</script>

<style lang="scss" scoped></style>
