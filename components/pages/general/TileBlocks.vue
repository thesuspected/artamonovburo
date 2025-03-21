<template>
    <div class="grid grid-cols-1" :class="innerClass">
        <div
            class="tile"
            v-for="(item, key) in tiles"
            :key="key"
            :style="{
                background: item.background,
                color: item.color,
                borderColor: item.color,
                border: item.border,
            }"
        >
            <div class="first-row">
                <h6 v-html="item.title"></h6>
                <span>{{ item.number }}</span>
            </div>
            <div class="second-row" v-html="item.subtitle"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue"
import { TilesType } from "~/components/pages/building-design/types"

defineProps({
    tiles: {
        type: Array as PropType<TilesType[]>,
        required: true,
    },
    innerClass: {
        type: String,
    },
})
</script>

<style lang="scss" scoped>
.grid {
    gap: 20px;

    .tile {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 300px;

        .first-row {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid;
            padding-bottom: 20px;
            align-items: center;
        }

        .second-row {
        }
    }
}
</style>
