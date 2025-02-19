import Moysklad from "moysklad"

const { NUXT_MS_LOGIN: login, NUXT_MS_PASS: password } = process.env
const ms = Moysklad({ login, password })

const groupBy = (array: any, key: any) =>
    array.reduce((accumulator: any, object: any) => {
        (accumulator[object[key]] ??= []).push(object)
        return accumulator
    }, {})

export default defineEventHandler(async () => {
    try {
        // Получаем товары
        const request = await ms.GET("entity/product", {
            filter: {
                archived: false,
            },
            expand: "images",
            limit: 100,
        })

        // Собираем нужные поля
        const products = request.rows.map((product: any) => {
            const { id, name, pathName, description, images, salePrices } = product
            return {
                id,
                name,
                pathName,
                description,
                price: salePrices[0].value,
                images: images.rows.map((image: any) => ({
                    title: image.title,
                    fullHref: image.meta.downloadHref,
                    miniatureHref: image.miniature.downloadHref,
                })),
            }
        })

        // Группируем по категориям
        return groupBy(products, "pathName")
    } catch (e) {
        console.error("Ошибка", e)
    }
})