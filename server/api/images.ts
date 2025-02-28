import Moysklad from "moysklad"

const { NUXT_MS_LOGIN: login, NUXT_MS_PASS: password } = process.env
const ms = Moysklad({ login, password })

export default defineEventHandler(async (event) => {
    const { images } = await readBody(event)
    try {
        // Скачиваем изображения
        const requests = images.map((href: string) =>
            ms.GET(`download/${href}`, null, {
                rawRedirect: true,
            }),
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