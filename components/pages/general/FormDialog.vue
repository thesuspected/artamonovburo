<template>
    <q-dialog v-model="localValue" transition-show="jump-up" transition-hide="jump-down" :maximized="!isDesktop"
              persistent>
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6"></div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup @click="handleClose" />
            </q-card-section>

            <q-card-section :class="{'mobile-content': !isDesktop}">
                <FormSuccess v-if="filledForm">
                    <template #title> Заявка на консультацию отправлена!</template>
                    <template #subtitle>
                        {{ filledForm.name }}, благодарим вас за оставленную заявку! Наш менеджер свяжется с вами в
                        ближайшее время.
                    </template>
                </FormSuccess>
                <FormInputs v-else button-label="Получить консультацию" :from="from" @submit="handleSubmit">
                    <template #title> Получить бесплатную консультацию</template>
                    <template #subtitle>
                        Пожалуйста, оставьте свои контактные данные, наш менеджер свяжется с вами для обсуждения
                        будущего проекта
                    </template>
                    <template #under>
                        Нажимая кнопку «Получить консультацию», вы даёте согласие<br>
                        на обработку персональных данных
                    </template>
                </FormInputs>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import FormInputs from "./FormInputs.vue"
import { toRef } from "vue"
import type { FormType } from "~/components/pages/general/types"
import FormSuccess from "~/components/pages/general/FormSuccess.vue"
import useScreenController from "~/hooks/useScreenController"

const props = defineProps({
    modelValue: {
        type: Boolean,
    },
    from: {
        type: String,
    },
})
const emit = defineEmits(["close"])

const { isDesktop } = useScreenController()
const localValue = toRef(props, "modelValue")
const filledForm = ref<FormType>()

const handleSubmit = (form: FormType) => {
    filledForm.value = form
}
const handleClose = () => {
    emit("close")
    filledForm.value = undefined
}
</script>

<style lang="scss" scoped>
.mobile-content {
    height: calc(100svh - 50px - 32px);
}
</style>
