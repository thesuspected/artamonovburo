<template>
    <q-form class="form">
        <component :is="isDesktop ? 'h3' : 'h4'" class="text-center infant-font">
            <slot name="title" />
        </component>
        <span class="text-center">
            <slot name="subtitle" />
        </span>
        <m-input v-model="form.name" label="Ваше Имя" placeholder="Как к вам обращаться?" />
        <m-input v-model="form.phone" label="Ваш телефон" mask="+7 (###) ###-##-##" placeholder="+7 (987) 654-32-10" />
        <m-btn class="mt-default" :label="buttonLabel" :loading="isLoading" shine-effect full-width
               @click="handleFormSubmit" />
        <span class="sub-text">
            <slot name="under" />
        </span>
    </q-form>
</template>
<script lang="ts" setup>
import MInput from "~/components/form/MInput.vue"
import MBtn from "~/components/buttons/MBtn.vue"
import useIsLoading from "~/hooks/useIsLoading"
import type { FormType } from "~/components/pages/general/types"
import useScreenController from "~/hooks/useScreenController"

const props = defineProps({
    src: {
        type: String,
        default: "img/building-design/form-house.png",
    },
    buttonLabel: {
        type: String,
        default: "Отправить",
    },
    from: {
        type: String,
    },
})
const emit = defineEmits(["submit"])

const form = ref<FormType>({
    name: undefined,
    phone: undefined,
    from: props.from,
})
const { isLoading, onLoading, offLoading } = useIsLoading()
const { isDesktop } = useScreenController()

const handleFormSubmit = async () => {
    onLoading()
    const res = await $fetch("/api/submit", {
        method: "POST",
        body: {
            name: form.value.name,
            phone: form.value.phone,
            from: form.value.from,
        },
    })
    offLoading()
    if (res) {
        emit("submit", form.value)
    }
}
</script>
<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 16px;
    padding: 40px;

    .sub-text {
        font-size: 12px;
        font-weight: 300;
        text-align: center;
    }
}
</style>
