<template>
    <Layout>
        <Section>
            <Container>
                <div class="main grid grid-cols-1 lg:grid-cols-2">
                    <div class="img">
                        <NuxtLink to="/catalog" class="link">
                            <q-icon name="fa-solid fa-chevron-left" color="primary" />
                            <span class="text-primary">Назад</span>
                        </NuxtLink>
                        <q-img v-if="selectedImage.fullHref" :src="selectedImage.fullHref" :ratio="1" />
                        <q-responsive v-else :ratio="1" class="no-image" />
                        <div class="miniatures">
                            <q-img
                                v-for="(item, key) in data.images"
                                class="miniature"
                                :class="{ selected: item.title === selectedImage.title }"
                                :key="key"
                                :src="item.miniatureHref"
                                :ratio="1"
                                @click="handleSelectImage(item)"
                            />
                        </div>
                    </div>
                    <div class="description">
                        <div class="fields">
                            <h3 class="infant-font">
                                {{ data.name }}
                            </h3>
                            <h3 class="price mt-8">{{ selectedModification.price ?? data.price }} ₽</h3>
                            <div v-if="data.modifications?.length" class="size mt-8">
                                <p>Размер:</p>
                                <div class="modifications">
                                    <m-btn
                                        v-for="(item, key) in data.modifications"
                                        :key="key"
                                        :label="item.value"
                                        :outline="selectedModification.value !== item.value"
                                        @click="handleSelectModification(item)"
                                    />
                                </div>
                            </div>
                            <m-btn class="mt-10" label="Расчитать стоимость" full-width @click="openDialog" />

                            <CalculateCostDialog
                                v-model="isDialogVisible"
                                :quiz-options="options"
                                @close="closeDialog"
                            />
                        </div>
                        <div class="parameters mt-10" v-html="data.description" style="white-space: pre-line" />
                    </div>
                </div>
            </Container>
        </Section>
        <FacadeMaterialsSection> Смотрите также </FacadeMaterialsSection>
    </Layout>
</template>

<script lang="ts" setup>
import useVisibilityController from "~/hooks/useVisibilityController"
import MBtn from "~/components/buttons/MBtn.vue"
import Section from "~/components/layout/Section.vue"
import Container from "~/components/layout/Container.vue"
import "swiper/css"
import "swiper/css/navigation"
import FacadeMaterialsSection from "~/components/pages/general/FacadeMaterialsSection.vue"
import type { Product } from "~/server/types"
import CalculateCostDialog from "~/components/pages/general/CalculateCostDialog.vue"
import type { QuizType } from "~/components/pages/general/types"
const { isVisible: isDialogVisible, open: openDialog, close: closeDialog } = useVisibilityController()

const options = ref<QuizType[]>([
    {
        question: "Сколько м2 стен у вашего дома?",
        selected: undefined,
        type: "radio",
        answers: [
            {
                label: "До 100 м²",
                value: "До 100 м²",
            },
            {
                label: "от 100 до 200м2",
                value: "от 100 до 200м2",
            },
            {
                label: "больше 200м2",
                value: "больше 200м2",
            },
            {
                label: "точно не знаю, нужен замер",
                value: "точно не знаю, нужен замер",
            },
        ],
    },
])
const route = useRoute()
const selectedImage = ref<{ fullHref?: string; miniatureHref?: string; title?: string }>({
    fullHref: undefined,
    miniatureHref: undefined,
    title: undefined,
})
const selectedModification = ref<{ name?: string; value?: string; price?: number }>({
    name: undefined,
    value: undefined,
    price: undefined,
})
const { data }: { data: Ref<Product> } = await useFetch("/api/product", {
    query: { id: route.query.id },
})
const handleSelectImage = (image: any) => {
    selectedImage.value = image
}
const handleSelectModification = (modification: any) => {
    selectedModification.value = modification
}

const replaceImageHrefsByBlobs = async () => {
    if (!data.value) {
        return
    }
    const blobs = data.value.images.map((item) => fetch(item.fullHref).then((resp) => resp.blob()))
    const responses = await Promise.all(blobs)
    data.value.images = data.value.images.map((item, key) => ({
        ...item,
        fullHref: window.URL.createObjectURL(responses[key]),
    }))
}

onMounted(async () => {
    console.log(data.value)
    if (!data.value) {
        return
    }
    await replaceImageHrefsByBlobs()
    if (data.value.images?.length) {
        selectedImage.value = data.value.images[0]
    }
    if (data.value.modifications?.length) {
        selectedModification.value = data.value.modifications[0]
    }
})
</script>

<style lang="scss" scoped>
.main {
    gap: 40px;
    position: relative;

    .img {
        .no-image {
            background: #d9d9d9;
        }

        .link {
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 10px 0;
            position: absolute;
            top: -40px;
        }

        .miniatures {
            display: grid;
            margin-top: 20px;
            gap: 20px;
            grid-template-columns: repeat(5, 1fr);

            .miniature {
                cursor: pointer;
                transition-duration: 0.2s;

                &:hover {
                    opacity: 0.8;
                }

                &.selected {
                    border: 1px solid $primary-color;
                }
            }
        }
    }

    .description {
        .fields {
            max-width: 425px;

            .modifications {
                display: flex;
                gap: 20px;
            }
        }

        .parameters {
            border-top: 1px solid $secondary-color;
            display: flex;
            padding-top: 20px;
        }
    }
}
</style>
