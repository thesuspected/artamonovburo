<template>
    <div class="section" :style="{'padding-top': `${top ?? padding}px`, 'padding-bottom': `${bottom ?? padding}px`}">
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    padding: {
        type: Number,
        default: 60,
    },
    top: {
        type: Number,
    },
    bottom: {
        type: Number,
    },
})
</script>

<style lang="scss" scoped>
.section {
}
</style>