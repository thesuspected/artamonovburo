<template>
    <div class="images-grid" :style="`${isDesktop ? 'gap: 20px' : 'gap: 5px'}`">
        <img v-for="(image, key) in images" :key="key" :src="image.src" :alt="image.alt" class="image"
             :style="{'grid-column': `span ${image.cols}`, 'grid-row': `span ${image.rows}`}">
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ImageGridType } from "~/components/pages/general/types"
import useScreenController from "~/hooks/useScreenController"

defineProps({
    images: {
        type: Array as PropType<ImageGridType[]>,
    },
})
const { isDesktop } = useScreenController()
</script>

<style lang="scss" scoped>
.images-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    .image {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}
</style>