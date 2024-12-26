<template>
    <q-btn
        unelevated
        class="base-button"
        :size="size"
        :class="{
            'w-full': fullWidth,
            large: large,
            capitalize: capitalize,
            'shine-effect': shineEffect,
        }"
        :color="color"
        :text-color="textColor"
        :label="label"
        :icon="icon"
        :flat="flat"
        :icon-right="iconRight"
        :padding="padding"
        :round="round"
        :disable="disable"
        :loading="loading"
        no-caps
    >
        <slot />
    </q-btn>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
    },
    color: {
        type: String,
        default: "primary",
    },
    textColor: {
        type: String,
    },
    icon: {
        type: String,
    },
    iconRight: {
        type: String,
    },
    padding: {
        type: String,
    },
    size: {
        type: String,
        default: "md",
    },
    round: {
        type: Boolean,
    },
    disable: {
        type: Boolean,
    },
    loading: {
        type: Boolean,
    },
    fullWidth: {
        type: Boolean,
    },
    flat: {
        type: Boolean,
    },
    capitalize: {
        type: Boolean,
    },
    large: {
        type: Boolean,
    },
    shineEffect: {
        type: Boolean,
    },
})
</script>

<style lang="scss" scoped>
.base-button {
    border-radius: 0;
    padding: 10px 40px;
    font-size: 16px !important;
    font-weight: 600;

    &.capitalize {
        text-transform: capitalize;
    }

    &:deep(.q-icon) {
        font-size: 1.515em;
    }
}

.large {
    height: 56px;
    padding-left: 30px;
    padding-right: 30px;
}

/* Shine */
.shine-effect {
    position: relative;
    overflow: hidden;

    &:after {
        content: '';
        top: 0;
        transform: translateX(100%);
        width: 100%;
        height: 56px;
        position: absolute;
        z-index: 1;
        animation: slide 4s infinite;

        /*
        CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/
        */
        background: -moz-linear-gradient(
                left,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 100%
        ); /* FF3.6+ */
        background: -webkit-gradient(
                linear,
                left top,
                right top,
                color-stop(0%, rgba(255, 255, 255, 0)),
                color-stop(50%, rgba(255, 255, 255, 0.8)),
                color-stop(99%, rgba(128, 186, 232, 0)),
                color-stop(100%, rgba(125, 185, 232, 0))
        ); /* Chrome,Safari4+ */
        background: -webkit-linear-gradient(
                left,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 100%
        ); /* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(
                left,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 100%
        ); /* Opera 11.10+ */
        background: -ms-linear-gradient(
                left,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 100%
        ); /* IE10+ */
        background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(128, 186, 232, 0) 99%,
                rgba(125, 185, 232, 0) 100%
        ); /* W3C */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#007db9e8', GradientType=1); /* IE6-9 */
    }

    /* animation */
    @keyframes slide {
        0% {
            transform: translateX(-100%);
        }
        20% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
}
</style>
