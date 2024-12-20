<template>
    <div class="footer">
        <div class="nav">
            <a class="infant-font" v-for="link in links" :href="link.to">{{ link.label }}</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { links } from "~/components/Layout/const"
</script>

<style lang="scss" scoped>
.footer {
    background: $primary-color;
    color: $bg-color;
    font-size: 20px;
    display: flex;

    .nav {
        display: flex;
        flex-direction: column;
        font-size: 30px;
        font-weight: 200;
    }
}
</style>