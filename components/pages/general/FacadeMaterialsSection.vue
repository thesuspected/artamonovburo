<template>
    <Section>
        <Container>
            <div class="carousel">
                <div class="header">
                    <TextQuote>
                        <slot />
                    </TextQuote>
                    <m-btn v-if="showBtn" outline label="Смотреть все фасады" />
                </div>
                <swiper
                    v-if="products.length"
                    :slides-per-view="isDesktop ? 4 : 2"
                    :space-between="30"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="(product, key) in products" :key="key">
                        <ProductCard :product="product" is-href />
                    </swiper-slide>
                </swiper>
                <div v-else class="grid grid-cols-4 gap-7 mt-default">
                    <div v-for="key in 4" :key="key">
                        <q-responsive :ratio="1">
                            <q-skeleton />
                        </q-responsive>
                        <q-skeleton type="text" class="text-subtitle1 mt-default" />
                        <q-skeleton type="text" width="50%" class="text-subtitle1" />
                        <q-skeleton type="QBtn" width="70%" class="mt-default" />
                    </div>
                </div>
            </div>
        </Container>
    </Section>
</template>
<script lang="ts" setup>
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import MBtn from "~/components/buttons/MBtn.vue"
import type { PropType } from "vue"
import type { Product } from "~/server/types"
import ProductCard from "~/components/pages/catalog/ProductCard.vue"
import useScreenController from "~/hooks/useScreenController"

defineProps({
    showBtn: {
        type: Boolean,
        default: false,
    },
    products: {
        type: Array as PropType<Product[]>,
        default: () => [],
    },
})
const modules = [Navigation]
const { isDesktop } = useScreenController()
</script>

<style lang="scss" scoped>
.carousel {
    .no-image {
        background: #d9d9d9;
    }

    .swiper {
        margin-top: 20px;
    }

    .header {
        display: flex;
        width: 100%;
        justify-content: space-between;

        h5 {
            margin-bottom: 0;
        }
    }

    &:deep(.swiper) {
        overflow: inherit;

        .swiper-button-disabled {
            opacity: 0 !important;
        }

        .swiper-button-prev {
            background: $primary-color;
            opacity: 1;
            border-radius: 100%;
            color: white;
            padding: 10px;
            width: 50px;
            height: 50px;
            margin-left: -35px;
            transition-duration: 0.2s;

            &:after {
                font-size: 20px;
            }
        }

        .swiper-button-next {
            background: $primary-color;
            opacity: 1;
            border-radius: 100%;
            color: white;
            width: 50px;
            height: 50px;
            margin-right: -35px;
            transition-duration: 0.2s;

            &:after {
                font-size: 20px;
            }
        }
    }
}
</style>
