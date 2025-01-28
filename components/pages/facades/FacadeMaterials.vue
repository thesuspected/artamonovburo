<template>
    <Section>
        <Container>
            <div class="carusel">
                <swiper :slides-per-view="4" :space-between="30" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                    <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                    <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                    <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                    <swiper-slide><img src="/public/img/catalog/wall.png" alt="" /></swiper-slide>
                    ...
                </swiper>
            </div>
        </Container>
    </Section>
</template>
<script lang="ts" setup>
import MainTitle from "~/components/text/MainTitle.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
const modules = [Navigation]
</script>

<style lang="scss" scoped>
.carusel {
    margin-top: 50px;
    .swiper {
        margin-top: 20px;
    }
    &:deep(.swiper) {
        .swiper-button-prev {
            background: $primary-color;
            opacity: 1;
            border-radius: 100%;
            color: white;
            padding: 10px;
            width: 50px;
            height: 50px;
            margin-left: -10px;
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
            margin-right: -10px;
            &:after {
                font-size: 20px;
            }
        }
    }
}
</style>
