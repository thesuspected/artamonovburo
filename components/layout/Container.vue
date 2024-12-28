<template>
    <div class="container" :style="{'max-width': `${maxWidth}px`}">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    maxWidth: {
        type: Number,
        default: 1400,
    },
})
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
    padding: 0 20px;
}
</style>