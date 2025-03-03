<template>
    <q-dialog
        v-model="localValue"
        transition-show="jump-up"
        transition-hide="jump-down"
        :maximized="!isDesktop"
        persistent
    >
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6"></div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup @click="handleClose" />
            </q-card-section>

            <q-card-section :class="{ 'mobile-content': !isDesktop }">
                <FormSuccess v-if="filledForm">
                    <template #title> Заявка на расчет стоимости отправлена!</template>
                    <template #subtitle>
                        {{ filledForm.name }}, благодарим вас за оставленную заявку! Наш менеджер свяжется с вами в
                        ближайшее время.
                    </template>
                </FormSuccess>
                <FormInputs
                    v-else button-label="Рассчитать стоимость" :from="from"
                    :payload="`${options[step].question} ${facadeSquareMeter ?? '-'}`"
                    @submit="handleSubmit"
                >
                    <template #subtitle>
                        Пожалуйста, оставьте свои контактные данные, наш менеджер свяжется с вами
                    </template>
                    <template #input>
                        <div class="quiz">
                            <h6>{{ options[step].question }}</h6>
                            <q-option-group
                                v-model="facadeSquareMeter"
                                :options="options[step].answers"
                                color="primary"
                                type="radio"
                            />
                        </div>
                    </template>
                    <template #under>
                        Нажимая кнопку «Рассчитать стоимость», вы даёте согласие<br />
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
import type { QuizType } from "~/components/pages/general/types"

const props = defineProps({
    modelValue: {
        type: Boolean,
    },
    from: {
        type: String,
    },
})
const emit = defineEmits(["close"])

const step = ref<number>(0)
const facadeSquareMeter = ref()
const options = ref<QuizType[]>([
    {
        question: "Сколько м² стен у вашего дома?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "До 100 м²",
                value: "До 100 м²",
            },
            {
                label: "от 100 до 200м²",
                value: "от 100 до 200м²",
            },
            {
                label: "больше 200м²",
                value: "больше 200м²",
            },
            {
                label: "точно не знаю, нужен замер",
                value: "точно не знаю, нужен замер",
            },
        ],
    },
])

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

.quiz {
    margin-top: 20px;
}
</style>
