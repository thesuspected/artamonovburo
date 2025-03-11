export default defineEventHandler(async (event) => {
    const { href } = await readBody(event)
    try {
        return fetch(href)
    } catch (e) {
        console.error("Ошибка", e)
    }
})