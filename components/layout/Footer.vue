<template>
    <Section class="footer">
        <Container class="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-end">
            <div class="nav">
                <a class="infant-font" v-for="link in links" :href="link.to">{{ link.label }}</a>
            </div>
            <div class="flex flex-col justify-between h-full">
                <div class="contacts">
                    <span class="mb-small font-light">Контакты</span>
                    <a href="tel:+79869864306" class="phone" v-touch-hold:300.mouse="copyPhoneNumber">
                        +7 (927) 102-39-69
                    </a>
                    <span>
                        г. Саратов, ул. им. Чернышевского Н.Г., 60/62.<br>Бизнес-центр «ФРЕГАТ» с 9:00 до 18:00
                    </span>
                </div>
                <div class="socials">
                    <span class="mb-small font-light">Социальные сети</span>
                    <a v-for="social in socials" class="social" :href="social.link">
                        <span>{{ social.title }}</span>
                    </a>
                </div>
            </div>
            <a class="confidential" href="#">Политика конфиденциальности</a>
        </Container>
        <img class="logo-bg" src="/icons/logo-a.svg" alt="">
    </Section>
</template>

<script lang="ts" setup>
import { links, socials } from "~/components/layout/const"
import { useQuasar } from "quasar"
import Container from "~/components/layout/Container.vue"
import Section from "~/components/layout/Section.vue"

const quasar = useQuasar()
const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+7 (927) 102-39-69")
    quasar.notify({
        message: "Номер телефона скопирован",
    })
}
</script>

<style lang="scss" scoped>
.footer {
    background: $primary-color;
    color: $bg-color;
    font-size: 20px;
    overflow: hidden;
    position: relative;

    .container {
        position: relative;
        padding-top: 40px;
        padding-bottom: 40px;

        .nav {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-size: 40px;
            gap: 10px;
        }

        .contacts, .socials {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 10px;
        }

        .confidential {
            color: $secondary-color;
            position: absolute;
            bottom: 0;
            font-weight: 400;
            left: 20px;
            font-size: 16px;
        }
    }

    .logo-bg {
        position: absolute;
        pointer-events: none;
        right: 25%;
        top: 0;
        height: 100%;
    }
}
</style>