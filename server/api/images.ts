import { msApi } from "~/server/ms"

export default defineEventHandler(async (event) => {
    const { images } = await readBody(event)
    try {
        // Скачиваем изображения
        const requests = images.map((href: string) =>
            msApi.downloadImages(href),
        )
        const responses = await Promise.all(requests)
        return {
            data: responses.map((response) => response.headers.get("location")),
        }
    } catch (e) {
        console.error("Ошибка", e)
        return {
            error: e,
        }
    }
})