<template>
    <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="col-span-1" />
        <h3 class="main-title infant-font col-span-2">
            <slot />
        </h3>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.main-title {
    text-indent: 100px;
    margin-left: -100px;
    margin-bottom: 100px;
}
</style>