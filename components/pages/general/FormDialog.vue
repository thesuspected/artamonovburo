<template>
    <q-dialog v-model="localValue" transition-show="jump-up" transition-hide="jump-down" :maximized="!isDesktop">
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6"></div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup @click="emit('close')" />
            </q-card-section>

            <q-card-section>
                <Form button-label="Получить консультацию">
                    <template #title> Получить бесплатную консультацию</template>
                    <template #subtitle>
                        Пожалуйста, оставьте свои контактные данные, наш менеджер свяжется с вами для обсуждения
                        будущего проекта
                    </template>
                    <template #under>
                        Нажимая кнопку «Получить консультацию», вы даёте согласие<br />
                        на обработку персональных данных
                    </template>
                </Form>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import Form from "./Form.vue"
import { computed, defineProps } from "vue"
import { toRef } from "vue"

const props = defineProps({
    modelValue: {
        type: Boolean,
    },
})
const emit = defineEmits(["close"])

const quasar = useQuasar()
const isDesktop = computed(() => quasar.screen.gt.md)
const localValue = toRef(props, "modelValue")
</script>

<style lang="scss" scoped></style>
