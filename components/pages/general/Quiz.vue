<template>
    <div class="content">
        <div class="q-pa-md">
            <q-linear-progress :value="progress" color="$primary-color" class="q-mt-sm" />
        </div>
        <div class="quiz">
            <h6>{{ options[step].question }}</h6>
            <q-option-group v-model="options[step].selected" :options="options[step].answers" color="primary" />
        </div>

        <div v-if="step + 1 == options.length" class="form">
            <m-input v-model="form.name" label="Ваше Имя" placeholder="Как к вам обращаться?" />
            <m-input
                v-model="form.phone"
                label="Ваш телефон"
                mask="+7 (###) ###-##-##"
                placeholder="+7 (987) 654-32-10"
            />
        </div>
        <m-btn v-if="step > 0" label="Назад" outline @click="clickPrev" class="prev mt-5" />

        <m-btn v-if="step + 1 < options.length" label="Далее" @click="clickNext" class="next ml-3 mt-5" />

        <m-btn v-if="step + 1 == options.length" class="ml-3 mt-5" label="Отправить" shine-effect />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const progress = ref(0.125)
import type { PropType, Ref } from "vue"
import MBtn from "~/components/buttons/MBtn.vue"
import type { QuizType } from "~/components/pages/general/types"

const props = defineProps({
    quizOptions: {
        type: Array as PropType<QuizType[]>,
        default: () => [],
    },
})

const step = ref<number>(0)
const options: Ref<QuizType[]> = toRef(props, "quizOptions")

const clickPrev = () => {
    step.value--
}
const clickNext = () => {
    step.value++
}

const form = ref({
    name: undefined,
    phone: undefined,
})
</script>

<style lang="scss" scoped>
.content {
    .quiz {
    }

    .form {
    }
}
.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px;
}
</style>
