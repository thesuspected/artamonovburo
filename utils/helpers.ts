export const promiseTimeout = (ms = 0): Promise<typeof setTimeout> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}