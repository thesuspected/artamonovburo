<template>
    <q-layout view="hHh lpR fFf">
        <Header @open-drawer="openDrawer" />
        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>
<script setup lang="ts">
import useVisibilityController from "~/hooks/useVisibilityController"
import Header from "~/components/Layout/Header.vue"

const { isVisible: isDrawerVisible, open: openDrawer, close: closeDrawer } = useVisibilityController()


</script>