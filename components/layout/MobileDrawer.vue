<template>
    <q-dialog v-model="localValue" maximized transition-show="jump-up" transition-hide="jump-down">
        <q-card>
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6"><img src="/icons/logo.svg" alt="Artamonov" /></div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup @click="emit('close')" />
            </q-card-section>
            <q-card-section>
                <div class="main-block">
                    <div class="links">
                        <NuxtLink class="link" v-for="(link, key) in links" :key="key" :to="`/${link.to}`">
                            {{ link.label }}
                        </NuxtLink>
                    </div>
                    <div>
                        <div class="right-block">
                            <div class="desktop">
                                <p>Контакты</p>
                                <a href="tel:+79869864306" class="phone" v-touch-hold:300.mouse="copyPhoneNumber">
                                    +7 (927) 102-39-69
                                </a>
                                <div class="divider" />
                                <div class="socials">
                                    <a v-for="social in socials" :href="social.link">
                                        <img :src="social.icon" alt="" />
                                    </a>
                                </div>
                            </div>
                            <MBtn class="button" @click="openDialog"> Начать проект</MBtn>
                            <FormDialog v-model="isDialogVisible" @close="closeDialog" />
                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script setup lang="ts">
import FormDialog from "../pages/general/FormDialog.vue"
import MBtn from "../buttons/MBtn.vue"
import useVisibilityController from "~/hooks/useVisibilityController"
import { links, socials } from "./const"
import { computed } from "vue"
const { isVisible: isDialogVisible, open: openDialog, close: closeDialog } = useVisibilityController()
const emit = defineEmits(["open-drawer"])

const quasar = useQuasar()

const headerRef = ref()

const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+7 (927) 102-39-69")
    quasar.notify({
        message: "Номер телефона скопирован",
    })
}
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    overflow-x: hidden;
}
.link {
    color: $primary-color;
}
.phone {
    color: $primary-color;
    font-size: 20px;
}
.main-block {
    height: calc(100vh - 64px - 32px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .links {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
        font-size: 20px;
    }
    .right-block {
        .socials {
            display: flex;
            gap: 10px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .button {
            width: 100%;
        }
    }
}
</style>
