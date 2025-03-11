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
                            @click="handleSelectGroup(key)"
                        >
                            <h4>
                                {{ key }}
                                <q-badge align="top" :label="products.length" class="badge" />
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="products grid grid-cols-2 lg:grid-cols-4">
                    <ProductCard
                        class="card" v-for="(product, key) in selectedGroupProducts"
                        :key="key"
                        :product="product"
                    />
                </div>
            </Container>
        </Section>
    </Layout>
</template>

<script lang="ts" setup>
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import { Product } from "~/server/types"
import { promiseTimeout } from "~/utils/helpers"
import ProductCard from "~/components/pages/catalog/ProductCard.vue"

const { data } = await useFetch("/api/products")
const selectedGroupKey = ref()
const selectedGroupProducts = ref<Product[]>([])

const handleSelectGroup = (key: string | number) => {
    selectedGroupKey.value = key
    selectedGroupProducts.value = data.value[selectedGroupKey.value]
}

const step = ref(0)
const loadImagesByKey = async (key: string): Promise<{ data?: string[], error?: string }> => {
    return $fetch("/api/images", {
        method: "POST",
        body: {
            images: data.value[key].slice(step.value, step.value + 5).map((item: any) => item.images[0].fullHref.split("/").pop()),
        },
    })
}

const replaceImageUrlByBlobs = async (links: string[]) => {
    // console.log("Заменяем ссылки на блобы")
    const blobs = links.map((link: string) =>
        $fetch<Promise<Blob>>("/api/href", {
            method: "POST",
            body: {
                href: link,
            },
        }),
    )
    const responses = await Promise.all(blobs)
    return responses.map((blob: Blob) => window.URL.createObjectURL(blob))
}

const getImageLinks = async () => {
    const keys = Object.keys(data.value)

    // Проходимся по каждой группе
    for (const key of keys) {
        // console.log("key =", key)
        const length = data.value[key].length
        let links: string[] = []
        let errorStack = 0

        // Загружаем по 5 изображений последовательно
        while (step.value < length) {
            // console.log("step =", step.value)
            let res = await loadImagesByKey(key)
            if (res?.error) {
                console.log("Ошибка =", res.error)
                errorStack++
                // console.log("Ждем 500мс")
                await promiseTimeout(500)
            }
            if (res?.data) {
                // console.log("res =", res)
                links.push(...res.data)
                step.value += 5
                await promiseTimeout(100)
            }
        }
        step.value = 0 // Обнуляем шаг

        // Заменяем ссылки на блобы
        links = await replaceImageUrlByBlobs(links)

        // Заменяем изображения в группе
        data.value[key] = data.value[key].map((item: any, key: number) => {
            return {
                ...item,
                images: [{
                    title: item.images[0]?.title ?? "",
                    fullHref: links[key],
                    miniatureHref: item.images[0]?.miniatureHref ?? "",
                    isLoaded: true,
                }],
            }
        })
        // console.log("Заменили =", data.value[key])

        // Выставляем в selected
        if (key === selectedGroupKey.value) {
            // console.log("Выставляем в selected", key, selectedGroupKey.value)
            handleSelectGroup(key)
        }

        await promiseTimeout(1000)
    }
}

onMounted(async () => {
    // console.log(data.value)
    handleSelectGroup(Object.keys(data.value)[0])
    await getImageLinks()
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
}
</style>
