<template>
    <div class="card">
        <q-img
            v-if="product.images.length"
            :src="product.images[0].isLoaded ? product.images[0].fullHref : product.images[0].miniatureHref"
            :ratio="1"
        />
        <q-responsive v-else :ratio="1" class="no-image" />
        <h6>{{ product.name }}</h6>
        <h6>{{ product.price }} ₽</h6>
        <q-space />
        <a v-if="isHref" :href="`/product?id=${product.id}`">
            <m-btn class="btn" label="Подробнее" />
        </a>
        <NuxtLink v-else :to="`/product?id=${product.id}`">
            <m-btn class="btn" label="Подробнее" />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import type { PropType } from "vue"
import type { Product } from "~/server/types"

defineProps({
    product: {
        type: Object as PropType<Product>,
        required: true,
    },
    isHref: {
        type: Boolean,
    },
})
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .no-image {
        background: #d9d9d9;
    }

    .btn {
        align-self: flex-start;
    }
}
</style>