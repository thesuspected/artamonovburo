<template>
    <h5 class="text-quote">
        <slot />
    </h5>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.text-quote {
    margin-bottom: 20px;
    padding: 10px 20px;
    border-left: 4px solid $primary-color;
}
</style>