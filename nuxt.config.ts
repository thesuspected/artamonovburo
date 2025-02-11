// https://nuxt.com/docs/api/configuration/nuxt-config
import { silenceSomeSassDeprecationWarnings } from "./utils/utils"

export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "Архитектурно-строительное бюро Artamonov",
            meta: [
                {
                    name: "description",
                    content:
                        "Создаём комфорт, меняя пространство. Возьмём на себя 100% работ от проектирования дома до благоустройства участка",
                },
                {
                    name: "yandex-verification",
                    content: "d8f2b03afdc1b09a",
                },
            ],
        },
    },
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: [
        [
            "nuxt-yandex-metrika",
            {
                id: "99875853",
                // debug: process.env.NODE_ENV !== "production",
                // delay: 0,
                // cdn: false,
                // verification: null, // Verification in Yandex Webmaster
                options: {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                },
            },
        ],
        [
            "nuxt-quasar-ui",
            {
                config: {
                    brand: {
                        background: "#F6F4F2", // base-01
                        dark: "#212121", // base-02
                        white: "#FFFFFF", // base-03
                        secondary: "#B1B1B1", // base-04
                        light: "#ECECEC", // base-05
                        primary: "#18443E",
                        "primary-hover": "#18443ECC",
                        "secondary-hover": "#2C5852",
                        negative: "#D91528",
                    },
                },
                plugins: ["Notify"],
                sassVariables: true,
                quietSassWarnings: true,
                extras: {
                    fontIcons: [
                        "fontawesome-v6",
                    ],
                },
            },
        ],
        [
            "@nuxtjs/google-fonts",
            {
                families: {
                    Manrope: [200, 300, 400, 500, 600, 700, 800],
                    "Cormorant Infant": [300, 400, 500, 600, 700],
                },
            },
        ],
        [
            "nuxt-yandex-metrika",
            {
                id: "99875853",
                // debug: process.env.NODE_ENV !== "production",
                // delay: 0,
                // cdn: false,
                // verification: null, // Verification in Yandex Webmaster
                options: {
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true,
                },
            },
        ],
        "@nuxtjs/tailwindcss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                    additionalData: "@use '~/assets/scss/variables.scss' as *;",
                    ...silenceSomeSassDeprecationWarnings,
                },
                sass: {
                    api: "modern-compiler",
                    ...silenceSomeSassDeprecationWarnings,
                },
            },
        },
    },
})
