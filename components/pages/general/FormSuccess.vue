<template>
    <div class="form-success">
        <component :is="isDesktop ? 'h3' : 'h4'" class="text-center infant-font text-primary font-bold">
            <slot name="title" />
        </component>
        <span class="text-center">
            <slot name="subtitle" />
        </span>
    </div>
</template>

<script lang="ts" setup>
import useScreenController from "~/hooks/useScreenController"

const { isDesktop } = useScreenController()
</script>

<style lang="scss" scoped>
.form-success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 16px;
    padding: 0 40px 40px;
}
</style>