<template>
    <q-header reveal>
        <Container class="header">
            <div class="first-row">
                <img src="/img/logo.svg" alt="Artamonov">
                <div class="flex">
                    <a href="tel:+79869864306">
                        <m-btn v-touch-hold:300.mouse="copyPhoneNumber" label="+7 (927) 102-39-69" flat />
                    </a>
                    <q-btn
                        v-if="false"
                        flat
                        round
                        icon="menu"
                        @click="handleOpenDrawer"
                    />
                </div>
            </div>
            <div class="second-row">
                <a class="link" v-for="(link, key) in links" :key="key" :href="`/${link.to}`">
                    {{ link.label }}
                </a>
            </div>
        </Container>
    </q-header>
</template>
<script setup lang="ts">
import MBtn from "~/components/buttons/MBtn.vue"
import Container from "~/components/Container.vue"
import { links } from "./const"

const emit = defineEmits(["open-drawer"])

const quasar = useQuasar()

const handleOpenDrawer = (route: string) => {
    emit("open-drawer", route)
}

const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+7 (927) 102-39-69")
    quasar.notify({
        message: "Номер телефона скопирован",
    })
}
</script>
<style scoped lang="scss">
@import "assets/scss/main";

.header {
    .first-row {
        display: flex;
        justify-content: space-between;
        height: 82px;
        padding: 16px 0;
        background: $background;
    }

    .second-row {
        height: 68px;
        display: flex;
        justify-content: space-between;
    }
}
</style>