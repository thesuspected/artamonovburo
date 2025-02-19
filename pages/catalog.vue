<template>
    <Layout>
        <Section>
            <Container class="catalog">
                <h2 class="infant-font">Каталог фасадов</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    <div class="groups col-span-2">
                        <div
                            v-for="(products, key) in data"
                            :key="key"
                            class="group infant-font"
                            :class="{'not-active': key !== selectedGroupKey}"
                            @click="handleSelectGroup(products, key)"
                        >
                            <h4>
                                {{ key }}
                                <q-badge align="top" :label="products.length" class="badge" />
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="products grid grid-cols-2 lg:grid-cols-4">
                    <div class="card" v-for="(product, key) in selectedGroupProducts" :key="key">
                        <q-img v-if="product.images.length" :src="product.images[0].miniatureHref" :ratio="1" />
                        <q-responsive v-else :ratio="1" class="no-image" />
                        <h6>{{ product.name }}</h6>
                        <h6>{{ product.price }} ₽</h6>
                        <q-space />
                        <m-btn class="btn" label="Подробнее" />
                    </div>
                </div>
            </Container>
        </Section>
    </Layout>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import MBtn from "~/components/buttons/MBtn.vue"
import { Product } from "~/server/types"

const { data } = await useFetch("/api/products")
const selectedGroupKey = ref()
const selectedGroupProducts = ref<Product[]>([])

const handleSelectGroup = (products: Product[], key: string | number) => {
    selectedGroupKey.value = key
    selectedGroupProducts.value = products
}

onMounted(async () => {
    console.log(data.value)
    selectedGroupKey.value = Object.keys(data.value)[0]
    selectedGroupProducts.value = data.value[selectedGroupKey.value]
})
</script>

<style lang="scss" scoped>
.catalog {
    .groups {
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 20px;
        column-gap: 30px;

        .group {
            display: flex;
            align-items: self-start;
            flex-wrap: nowrap;
            cursor: pointer;
            transition-duration: 0.2s;

            &:hover {
                color: $secondary-hover-color !important;
            }

            &.not-active {
                color: $secondary-color;
            }

            .badge {
                background: none;
                color: inherit;
                font-size: 20px;
                margin-left: -10px;
            }
        }
    }
}

.products {
    gap: 20px;
    margin-top: 60px;

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
}
</style>
