<template>
    <div class="container" :style="{'max-width': `${maxWidth}px`, 'padding': `${isDesktop ? '0 20px' : '0 16px'}`}">
        <slot />
    </div>
</template>

<script setup lang="ts">
import useScreenController from "~/hooks/useScreenController"

defineProps({
    maxWidth: {
        type: Number,
        default: 1400,
    },
})
const { isDesktop } = useScreenController()
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
}
</style>