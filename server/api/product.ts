import Moysklad from "moysklad"

const { NUXT_MS_LOGIN: login, NUXT_MS_PASS: password } = process.env
const ms = Moysklad({ login, password })

export default defineEventHandler(async (event) => {
    const { id: productId } = getQuery(event)
    try {
        // Получаем товар по id
        const product = await ms.GET(`entity/product/${productId}`, {
            filter: {
                archived: false,
            },
            expand: "images",
        })

        // Получаем модификации
        const modificationsRequest = await ms.GET(`entity/variant`, {
            filter: {
                archived: false,
                productid: product.id,
            },
        })
        const modifications = modificationsRequest.rows.map((item: any) => {
            return {
                name: item.characteristics[0].name,
                value: item.characteristics[0].value,
                price: item.salePrices[0].value / 100,
            }
        }).sort((a: any, b: any) => a.price - b.price) // Сортируем по цене

        // Скачиваем изображения
        const requests = product.images.rows.map((item: any) =>
            ms.GET(`download/${item.meta.downloadHref.split("/").pop()}`, null, {
                rawRedirect: true,
            }),
        )
        const responses = await Promise.all(requests)

        // Собираем нужные поля
        const { id, name, pathName, description, images, salePrices } = product
        return {
            id,
            name,
            pathName,
            description,
            price: salePrices[0].value / 100,
            images: images.rows.map((image: any, key: number) => ({
                title: image.title,
                fullHref: responses[key].headers.get("location"),
                miniatureHref: image.miniature.downloadHref,
            })),
            modifications,
        }
    } catch (e) {
        console.error("Ошибка", e)
    }
})