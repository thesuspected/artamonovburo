<template>
    <q-header reveal class="bg-background header">
        <div class="first-row">
            <img src="/img/logo.svg" alt="Artamonov">
            <div class="right-block">
                <span class="contacts">г. Саратов, ул. им. Чернышевского Н.Г., 60/62.<br>Бизнес-центр «ФРЕГАТ» с 9:00 до 18:00</span>
                <div class="divider" />
                <div class="socials">
                    <a v-for="social in socials" :href="social.link">
                        <img :src="social.icon" alt="">
                    </a>
                </div>
                <a href="tel:+79869864306" class="phone" v-touch-hold:300.mouse="copyPhoneNumber">
                    +7 (927) 102-39-69
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
        <div class="second-row bg-primary">
            <a class="link" v-for="(link, key) in links" :key="key" :href="`/${link.to}`">
                {{ link.label }}
            </a>
        </div>
    </q-header>
</template>
<script setup lang="ts">
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

const socials = [
    {
        link: "http://www.yandex.ru/",
        icon: "/img/wa-icon.svg",
    },
    {
        link: "http://www.yandex.ru/",
        icon: "/img/tg-icon.svg",
    },
    {
        link: "http://www.yandex.ru/",
        icon: "/img/vk-icon.svg",
    },
]
</script>
<style scoped lang="scss">

.header {
    background: $bg-color;

    .first-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 82px;
        line-height: 1.2;
        background: $bg-color;
        color: $dark-color;
        padding: 16px 80px;

        .right-block {
            display: flex;
            align-items: center;
            gap: 32px;

            .divider {
                height: 40px;
                width: 1px;
                background: $secondary-color;
            }

            .socials {
                display: flex;
                gap: 20px;
            }

            .phone {
                color: $primary-color;
                font-weight: 600;
                font-size: 20px;
            }
        }
    }

    .second-row {
        height: 68px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 80px;
    }
}
</style>