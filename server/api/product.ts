import Moysklad from "moysklad"

const { NUXT_MS_LOGIN: login, NUXT_MS_PASS: password } = process.env
const ms = Moysklad({ login, password })

export default defineEventHandler(async (event) => {
    const { id: productId } = getQuery(event)
    console.log(event)
    try {
        // Получаем товар по id
        const request = await ms.GET(`entity/product/${productId}`, {
            filter: {
                archived: false,
            },
            expand: "images",
        })
        
        // TODO: Скачивать изображения товара

        // Собираем нужные поля
        const { id, name, pathName, description, images, salePrices } = request
        return {
            id,
            name,
            pathName,
            description,
            price: salePrices[0].value / 100,
            images: images.rows.map((image: any) => ({
                title: image.title,
                fullHref: image.meta.downloadHref,
                miniatureHref: image.miniature.downloadHref,
            })),
        }
    } catch (e) {
        console.error("Ошибка", e)
    }
})