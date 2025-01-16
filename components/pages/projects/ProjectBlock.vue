<template>
    <div class="project-block">
        <div class="text">
            <h3 class="infant-font" v-html="data.title" />
            <p v-html="data.subtitle" />
        </div>
        <ImagesGrid :images="data.images" />
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ProjectBlockType } from "~/components/pages/projects/types"
import ImagesGrid from "~/components/pages/general/ImagesGrid.vue"

defineProps({
    data: {
        type: Object as PropType<ProjectBlockType>,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.project-block {
    padding: 100px 0;

    .text {
        .infant-font {
            border-bottom: 1px solid $secondary-color;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        p {
            font-weight: 300;
            font-size: 20px;
            line-height: 1.2;
            margin-bottom: 40px;
        }
    }
}
</style>