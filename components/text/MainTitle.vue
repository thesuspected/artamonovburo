<template>
    <div class="flex justify-center">
        <h3 class="main-title infant-font">
            <slot />
        </h3>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.main-title {
    text-align: center;
    margin-bottom: 60px;
    position: relative;

    &:before {
        content: '\201C';
        position: absolute;
        top: 55%;
        left: -100px;
        color: $primary-color;
        opacity: 0.15;
        font-size: 4em;
        z-index: -1;
    }

    &:after {
        content: '\201D';
        position: absolute;
        top: 55%;
        right: -100px;
        color: $primary-color;
        opacity: 0.15;
        font-size: 4em;
        z-index: -1;
    }
}
</style>