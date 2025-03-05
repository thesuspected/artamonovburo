import { msApi } from "~/server/ms"

export default defineEventHandler(async (event) => {
    const { id, pathName } = await readBody(event)
    try {
        // Получаем товары смежной группы
        const products = await msApi.getSliderProducts(id, pathName)

        // Скачиваем изображения
        const requests = products.rows.map((product: any) =>
            msApi.downloadImages(product.images.rows[0].meta.downloadHref.split("/").pop()),
        )
        const responses = await Promise.all(requests)

        // Собираем нужные поля
        return products.rows.map((product: any, key: number) => {
            const { id, name, pathName, description, images, salePrices } = product
            return {
                id,
                name,
                pathName,
                description,
                price: salePrices[0].value / 100,
                images: images.rows.map((image: any) => ({
                    title: image.title,
                    fullHref: responses[key].headers.get("location"),
                    miniatureHref: image.miniature.downloadHref,
                })),
            }
        })
    } catch (e) {
        console.error("Ошибка", e)
        return {
            error: e,
        }
    }
})