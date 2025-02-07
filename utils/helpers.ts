import { scroll } from "quasar"

const { getScrollTarget, setVerticalScrollPosition } = scroll

export const scrollToElement = (el: HTMLElement) => {
    const target = getScrollTarget(el)
    const offset = el.offsetTop
    const duration = 1000
    setVerticalScrollPosition(target, offset, duration)
}

export const promiseTimeout = (ms = 0): Promise<typeof setTimeout> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}