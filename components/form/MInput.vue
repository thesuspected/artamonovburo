<template>
    <q-input
        :model-value="modelValue"
        :label="label"
        :placeholder="placeholder"
        :mask="mask"
        @update:model-value="updateModelValue"
    />
</template>

<script lang="ts" setup>
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
})
const emit = defineEmits(["update:model-value"])

const updateModelValue = (value?: string) => {
    emit("update:model-value", value)
}
</script>

<style lang="scss" scoped>
</style>