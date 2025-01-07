<template>
    <div class="images-grid">
        <img v-for="(image, key) in images" :key="key" :src="image.src" :alt="image.alt" class="image"
             :style="{'grid-column': `span ${image.cols}`, 'grid-row': `span ${image.rows}`}">
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue"
import type { ImageGridType } from "~/components/pages/general/types"

defineProps({
    images: {
        type: Array as PropType<ImageGridType[]>,
    },
})
</script>

<style lang="scss" scoped>
.images-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(12, 1fr);

    .image {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}
</style>