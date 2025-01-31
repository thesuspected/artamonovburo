<template>
    <q-form class="form">
        <h3 class="text-center infant-font">
            <slot name="title" />
        </h3>
        <span class="text-center">
            <slot name="subtitle" />
        </span>
        <m-input v-model="form.name" label="Ваше Имя" placeholder="Как к вам обращаться?" />
        <m-input v-model="form.phone" label="Ваш телефон" mask="+7 (###) ###-##-##" placeholder="+7 (987) 654-32-10" />
        <m-btn class="mt-default" :label="buttonLabel" shine-effect full-width />
        <span class="sub-text">
            <slot name="under" />
        </span>
    </q-form>
</template>
<script lang="ts" setup>
import MInput from "~/components/form/MInput.vue"
import MBtn from "~/components/buttons/MBtn.vue"

defineProps({
    src: {
        type: String,
        default: "img/building-design/form-house.png",
    },
    buttonLabel: {
        type: String,
        default: "Отправить",
    },
})

const form = ref({
    name: undefined,
    phone: undefined,
})
</script>
<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 40px;

    .sub-text {
        font-size: 12px;
        font-weight: 300;
        text-align: center;
    }
}
</style>
