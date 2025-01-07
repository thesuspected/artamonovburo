<template>
    <div v-for="(item, key) in values" :key="key" class="grid grid-cols-2">
        <div class="flex" v-if="isTextSmall">
            <h6 v-if="withNumbers" class="mr-4">0{{ key + 1 }}</h6>
            <h6 class="">{{ item.title }}</h6>
        </div>
        <div v-else class="flex items-center">
            <h4 v-if="withNumbers" class="mr-8">0{{ key + 1 }}</h4>
            <h6 class="title infant-font">{{ item.title }}</h6>
        </div>
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
    withNumbers: {
        type: Boolean,
        default: false,
    },
    isTextSmall: {
        type: Boolean,
        default: false,
    },
})
</script>

<style lang="scss" scoped>
.grid {
    border-top: 1px solid $dark-color;
    gap: 30px;
    padding: 40px 0;
    align-items: center;

    &:last-child {
        border-bottom: 1px solid $dark-color;
    }

    .title {
        font-size: 40px;
        line-height: 1.2;
        font-weight: 500;
    }

    .list {
        font-size: 20px;

        p {
            margin-bottom: 5px;
            font-weight: 300;
        }
    }
}
</style>