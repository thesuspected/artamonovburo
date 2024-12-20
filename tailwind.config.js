/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        colors: {
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
        extend: {
            borderRadius: {
                "default": "0.625rem", // 10px
                "image": "0.375rem", // 6px
            },
            gap: {
                "default": "0.625rem", // 10px
                "container": "1.25rem", // 20px
            },
            padding: {
                "small": "0.625rem", // 10px
                "default": "1.25rem", // 20px
                "container": "2.5rem", // 40px
                "section": "5rem", // 80px
            },
            margin: {
                "small": "0.625rem", // 10px
                "default": "1.25rem", // 20px
                "container": "2.5rem", // 40px
                "section": "5rem", // 80px
            },
        },
    },
    plugins: [],
}

