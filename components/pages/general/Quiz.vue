<template>
    <div class="content">
        <!--    Добавить компонент linear-progress https://quasar.dev/vue-components/linear-progress    -->
        <div class="quiz">
            <h6>{{ options[step].question }}</h6>
            <q-option-group
                v-model="options[step].selected"
                :options="options[step].answers"
                color="primary"
            />
        </div>
        <!--    Если: (шаг + 1) равен длине массива     -->
        <div class="form">
            <!--    Добавить: форму с телефоном и именем из компонента FormSection    -->
        </div>
        <!--    Если: шаг больше нуля    -->
        <m-btn label="Назад" outline @click="clickPrev" />
        <!--    Если: (шаг + 1) меньше длины массива    -->
        <m-btn label="Далее" @click="clickNext" />
        <!--    Если: (шаг + 1) меньше длины массива    -->
        <!--    Добавить: кнопку "Отправить" из компонента FormSection  (убрать пропс full-width)  -->
    </div>
</template>

<script lang="ts" setup>

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
    // Унарная операция убавления шага
}
const clickNext = () => {
    // Унарная операция прибавления шага
}

</script>

<style lang="scss" scoped>
.content {
    .quiz {

    }

    .form {

    }
}
</style>