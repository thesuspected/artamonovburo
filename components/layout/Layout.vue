<template>
    <q-layout view="hHh lpR fFf">
        <Header @open-drawer="openDrawer" />
        <MobileDrawer v-model="isDrawerVisible" @close="closeDrawer" />
        <FormDialog v-model="isDialogVisible" :from="eventFrom" @close="closeDialog" />
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
import FormDialog from "~/components/pages/general/FormDialog.vue"
import { Events } from "~/plugins/event-bus"

const { isVisible: isDrawerVisible, open: openDrawer, close: closeDrawer } = useVisibilityController()
const { isVisible: isDialogVisible, open: openDialog, close: closeDialog } = useVisibilityController()

const { $listen } = useNuxtApp()
const eventFrom = ref()

$listen(Events.open_form_dialog, (from) => {
    eventFrom.value = from
    openDialog()
})
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    overflow-x: clip;
}
</style>