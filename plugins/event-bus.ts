import mitt from "mitt"

export const Events = {
    open_form_dialog: "open_form_dialog",
}

export default defineNuxtPlugin(() => {
    const emitter = mitt()

    return {
        provide: {
            event: emitter.emit, // Will emit an event
            listen: emitter.on, // Will register a listener for an event
        },
    }
})
