<template>
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="col-span-1"><img src="/public/img/construction/quiz.png" alt="" /></div>
        <div class="content col-span-1">
            <FormSuccess class="success" v-if="filledForm">
                <template #title> Заявка на консультацию отправлена!</template>
                <template #subtitle>
                    {{ filledForm.name }}, благодарим вас за оставленную заявку! Наш менеджер свяжется с вами в
                    ближайшее время.
                </template>
            </FormSuccess>
            <div v-else>
                <div>
                    <h6 class="q-mb-xs text-right font-light">{{ step }}/{{ options.length }}</h6>
                    <q-linear-progress :value="progress" color="$primary-color" />
                </div>

                <div v-if="step !== options.length" class="quiz">
                    <h6>{{ options[step].question }}</h6>
                    <q-slider
                        v-if="options[step].type === 'slider'"
                        v-model="options[step].selected"
                        class="q-pt-xl"
                        :marker-labels="markerLabels"
                        :min="50"
                        :max="500"
                        :step="1"
                        label
                        label-always
                        color="primary"
                    />
                    <q-option-group
                        v-else
                        v-model="options[step].selected"
                        :options="options[step].answers"
                        color="primary"
                        :type="options[step].type"
                    />
                </div>

                <q-form v-if="step == options.length" class="form" ref="formRef">
                    <h6 class="text">Отправьте заявку, и мы вернемся к вам с предварительным расчетом</h6>
                    <m-input
                        v-model="form.name"
                        label="Ваше Имя"
                        placeholder="Как к вам обращаться?"
                        lazy-rules
                        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле']"
                    />
                    <m-input
                        v-model="form.phone"
                        label="Ваш телефон"
                        mask="+7 (###) ###-##-##"
                        placeholder="+7 (987) 654-32-10"
                        lazy-rules
                        :rules="[(val) => (val && val.length > 0) || 'Обязательное поле']"
                    />
                </q-form>

                <div class="flex gap-3">
                    <m-btn v-if="step > 0" label="Назад" outline @click="clickPrev" class="prev mt-5" />
                    <m-btn v-if="step < options.length" label="Далее" @click="clickNext" class="next mt-5" />
                    <m-btn
                        v-if="step == options.length"
                        class="mt-5"
                        label="Отправить"
                        shine-effect
                        :loading="isLoading"
                        @click="handleSubmit"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import type { PropType, Ref } from "vue"
import MBtn from "~/components/buttons/MBtn.vue"
import type { QuizType } from "~/components/pages/general/types"
import MInput from "~/components/form/MInput.vue"
import useIsLoading from "~/hooks/useIsLoading"
import { FormType } from "~/components/pages/general/types"
import FormSuccess from "~/components/pages/general/FormSuccess.vue"

const props = defineProps({
    quizOptions: {
        type: Array as PropType<QuizType[]>,
        default: () => [],
    },
    from: {
        type: String,
    },
})

const step = ref<number>(0)
const options: Ref<QuizType[]> = toRef(props, "quizOptions")
const progress = computed(() => step.value / options.value.length)
const percent = computed(() => (progress.value * 100).toFixed(2) + "%")
const { isLoading, onLoading, offLoading } = useIsLoading()

const markerLabels = [
    {
        label: "50",
        value: 50,
    },
    {
        label: "500",
        value: 500,
    },
]

const clickPrev = () => {
    step.value--
}
const clickNext = () => {
    step.value++
}

const formRef = ref()
const form = ref({
    name: undefined,
    phone: undefined,
    from: props.from,
})
const filledForm = ref<FormType>()

const getQuizString = (): string => {
    let text = ""
    options.value.forEach((item) => {
        text += `${item.question}\n`
        text += `${item.selected}\n\n`
    })
    return text
}

const handleSubmit = async () => {
    const success = await formRef.value.validate()
    if (!success) {
        return
    }
    onLoading()
    const res = await $fetch("/api/submit", {
        method: "POST",
        body: {
            name: form.value.name,
            phone: form.value.phone,
            from: form.value.from,
            quiz: getQuizString(),
        },
    })
    if (res) {
        filledForm.value = form.value
    }
    offLoading()
}
</script>

<style lang="scss" scoped>
.content {
    .success {
        padding-top: 40px !important;
    }

    .quiz {
        height: 250px;
        margin-top: 40px;
    }
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 250px;
    margin-top: 40px;
    padding: 0 20px;

    .text {
        margin-left: -20px;
        max-width: 400px;
    }
}
</style>
