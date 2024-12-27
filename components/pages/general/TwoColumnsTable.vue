<template>
    <div v-for="(item, key) in values" :key="key" class="grid grid-cols-2">
        <h6 class="title">{{ item.title }}</h6>
        <div class="list">
            <p v-for="(text, textKey) in item.list" :key="textKey">{{ text }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import type { TableType } from "~/components/pages/general/types"

defineProps({
    values: {
        type: Array as PropType<TableType[]>,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.grid {
    border-top: 1px solid $dark-color;
    gap: 30px;
    padding: 40px 0;
    align-items: center;

    .title {
        font-size: 40px;
    }

    .list {
        font-size: 20px;

        p {
            margin-bottom: 5px;
        }
    }
}
</style>