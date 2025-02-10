<template>
    <component :is="isDesktop ? 'h5' : 'h6'" class="text-quote">
        <slot />
    </component>
</template>

<script lang="ts" setup>
import useScreenController from "~/hooks/useScreenController"

const { isDesktop } = useScreenController()
</script>

<style lang="scss" scoped>
.text-quote {
    margin-bottom: 20px;
    padding: 10px 20px;
    border-left: 4px solid $primary-color;
}
</style>