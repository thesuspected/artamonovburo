<template>
    <div class="page-header grid grid-cols-1 lg:grid-cols-3">
        <h2 class="title infant-font lg:col-span-2" v-html="title"></h2>
        <div class="info">
            <p>{{ description }}</p>
            <m-btn :label="buttonLabel" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"

defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    buttonLabel: {
        type: String,
    },
})
</script>

<style lang="scss" scoped>
.page-header {
    padding: 80px;

    .info {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
}
</style>