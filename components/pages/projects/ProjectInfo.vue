<template>
    <div class="grid grid-cols-2">
        <div v-for="(item, key) in info" :key="key" class="info-block">
            <component :is="isDesktop ? 'h2' : 'h3'" class="title">{{ item.value }}</component>
            <p>{{ item.name }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ProjectInfoType } from "~/components/pages/projects/types"
import type { PropType } from "vue"
import useScreenController from "~/hooks/useScreenController"

defineProps({
    info: {
        type: Object as PropType<ProjectInfoType[]>,
    },
})
const { isDesktop } = useScreenController()
</script>

<style lang="scss" scoped>
.grid {
    padding-top: 100px;
    gap: 20px;

    .info-block {

        .title {
            font-family: 'Cormorant Infant', 'serif';
            font-weight: 600;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid $secondary-color;
        }

        p {
            font-size: 20px;
            font-weight: 300;
        }
    }
}
</style>