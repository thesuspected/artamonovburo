import { msApi } from "~/server/ms"

export default defineEventHandler(async (event) => {
    const { id: productId } = getQuery(event)
    try {
        // Получаем товар по id
        const product = await msApi.getProductById(String(productId))

        // Получаем модификации
        const modificationsRequest = await msApi.getProductModifications(String(productId))
        const modifications = modificationsRequest.rows.map((item: any) => {
            return {
                name: item.characteristics[0].name,
                value: item.characteristics[0].value,
                price: item.salePrices[0].value / 100,
            }
        }).sort((a: any, b: any) => a.price - b.price) // Сортируем по цене

        // Скачиваем изображения
        const requests = product.images.rows.map((item: any) =>
            msApi.downloadImages(item.meta.downloadHref.split("/").pop()),
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