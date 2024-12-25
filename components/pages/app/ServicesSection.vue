<template>
    <section class="services-section">
        <MainTitle>
            Делаем дома прочными, фасады<br>выразительными, а интерьеры —
            <br>неповторимыми
        </MainTitle>
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <a
                v-for="service in services"
                :key="service.title"
                class="service-card"
                :class="{'row-span-2': service.isTwice}"
                :href="service.to"
            >
                <img
                    :src="service.image"
                    :alt="service.alt"
                    loading="lazy"
                    class="image"
                />
                <div class="info">
                    <span class="title">{{ service.title }}</span>
                    <img
                        src="/icons/chevron-right.svg"
                        alt="chevron right"
                        class="icon"
                    />
                </div>
            </a>
        </div>
    </section>
</template>

<script lang="ts" setup>

import MainTitle from "~/components/text/MainTitle.vue"

interface Service {
    title: string
    image: string
    alt: string
    to: string
    isTwice?: boolean
}

const services = ref<Service[]>([
    {
        title: "Дизайн интерьеров",
        image: "/img/interior_designs.png",
        alt: "Interior design showcase",
        to: "interior-design",
        isTwice: true,
    },
    {
        title: "Строительство домов",
        image: "/img/build_houses.png",
        alt: "House construction",
        to: "construction",
    },
    {
        title: "Отделка фасадов",
        image: "/img/facade_finishing.png",
        alt: "Facade finishing",
        to: "facades",
    },
    {
        title: "Проектирование",
        image: "/img/architectural_design.png",
        alt: "Architectural design",
        to: "building-design",
    },
    {
        title: "Реставрация",
        image: "/img/restoration.png",
        alt: "Restoration work",
        to: "restoration",
    },
])
</script>

<style lang="scss" scoped>
.services-section {
    padding: 80px;

    .grid {
        gap: 20px;

        .service-card {
            display: flex;
            flex-direction: column;

            &:hover {
                .image {
                    filter: brightness(110%);
                }
            }

            &::after, &::before {
                background: $primary-color;
            }

            .image {
                flex-grow: 1;
                object-fit: cover;
                transition: 0.3s ease;
            }

            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 12px;

                .title {
                    font-size: 20px;
                    color: $dark-color;
                }

                .icon {
                    height: 20px;
                    width: 20px;
                }
            }
        }
    }
}
</style>