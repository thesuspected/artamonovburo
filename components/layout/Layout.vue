<template>
    <q-layout view="hHh lpR fFf">
        <Header @open-drawer="openDrawer" />
        <MobileDrawer v-model="isDrawerVisible" @close="closeDrawer" />
        <q-page-container class="page">
            <slot />
            <Footer />
        </q-page-container>
    </q-layout>
</template>
<script setup lang="ts">
import useVisibilityController from "~/hooks/useVisibilityController"
import Header from "~/components/layout/Header.vue"
import Footer from "~/components/layout/Footer.vue"
import MobileDrawer from "~/components/layout/MobileDrawer.vue"

const { isVisible: isDrawerVisible, open: openDrawer, close: closeDrawer } = useVisibilityController()
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    overflow-x: hidden;
}
</style>