<template>
    <Section class="hero-section"
             :style="`background-image: url(${backgroundImage}); background-position: ${backgroundPosition}`">
        <Container class="content">
            <h2 class="title infant-font">
                <slot name="title" />
            </h2>
            <p class="description">
                <slot name="subtitle" />
            </p>
            <m-btn class="main-btn" :label="buttonLabel" shine-effect @click="openDialog" />
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

const { isVisible: isDialogVisible, open: openDialog, close: closeDialog } = useVisibilityController()
</script>

<style lang="scss" scoped>
.hero-section {
    position: relative;
    height: calc(100vh - 150px);
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
    }
}
</style>
