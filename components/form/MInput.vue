<template>
    <q-input
        :model-value="modelValue"
        :label="label"
        :placeholder="placeholder"
        :mask="mask"
        :rules="rules"
        :lazy-rules="lazyRules"
        @update:model-value="updateModelValue"
    />
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ValidationRule } from "quasar"

defineProps({
    modelValue: {
        type: [String, Number],
    },
    label: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    mask: {
        type: String,
    },
    rules: {
        type: Array as PropType<ValidationRule[] | undefined>,
    },
    lazyRules: {
        type: [Boolean, String] as PropType<boolean | "ondemand" | undefined>,
    },
})
const emit = defineEmits(["update:model-value"])

const updateModelValue = (value?: string) => {
    emit("update:model-value", value)
}
</script>

<style lang="scss" scoped>
</style>