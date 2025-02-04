<template>
    <Section class="hero-section"
             :style="`background-image: url(${backgroundImage}); background-position: ${backgroundPosition}; height: calc(100vh - ${isDesktop ? 150 : 82}px)`">
        <Container class="content">
            <component :is="isDesktop ? 'h2' : 'h4'" class="title infant-font">
                <slot name="title" />
            </component>
            <p class="description">
                <slot name="subtitle" />
            </p>
            <m-btn class="main-btn" :label="buttonLabel" shine-effect @click="openDialog" />
            <div class="bottom">
                <p class="text">
                    <slot name="bottom" />
                </p>
                <q-icon name="fa-solid fa-arrow-down-long" size="30px" class="animate-bounce" />
            </div>
        </Container>
        <FormDialog v-model="isDialogVisible" @close="closeDialog" />
    </Section>
</template>

<script lang="ts" setup>
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"
import FormDialog from "~/components/pages/general/FormDialog.vue"
import useVisibilityController from "~/hooks/useVisibilityController"
import { computed } from "vue"

defineProps({
    buttonLabel: {
        type: String,
        default: "Записаться на консультацию",
    },
    backgroundImage: {
        type: String,
    },
    backgroundPosition: {
        type: String,
        default: "center",
    },
})

const quasar = useQuasar()
const isDesktop = computed(() => quasar.screen.gt.sm)
const { isVisible: isDialogVisible, open: openDialog, close: closeDialog } = useVisibilityController()
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    background-size: cover;
    color: $white-color;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        background: rgba(9, 28, 25, 0.2);
        width: 100%;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 100%;
        isolation: isolate;

        .title {
            margin-bottom: 24px;
            font-weight: 800;
            text-shadow: 2px 0 50px $dark-color;
            filter: drop-shadow(5px 5px 50px $dark-color);
        }

        .description {
            font-size: 18px;
            font-weight: 400;
            color: $light-color;
            text-shadow: 2px 0 50px $dark-color;
            filter: drop-shadow(5px 5px 50px $dark-color);
            margin-bottom: 40px;
        }

        .main-btn {
            min-width: 250px;
            filter: drop-shadow(5px 5px 50px $dark-color);
        }

        .bottom {
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            .text {
                text-align: center;
            }
        }
    }
}
</style>
