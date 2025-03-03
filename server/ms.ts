import Moysklad from "moysklad"

const { NUXT_MS_LOGIN: login, NUXT_MS_PASS: password } = process.env
const ms = Moysklad({ login, password })

async function downloadImages(
    href: string,
) {
    return ms.GET(`download/${href}`, null, {
        rawRedirect: true,
    })
}

async function getProductById(
    productId: string,
) {
    return ms.GET(`entity/product/${productId}`, {
        filter: {
            archived: false,
        },
        expand: "images",
    })
}

async function getAllProducts() {
    return ms.GET("entity/product", {
        filter: {
            archived: false,
        },
        expand: "images",
        limit: 100,
    })
}

async function getSliderProducts(id: string, pathName: string) {
    return ms.GET(`entity/product`, {
        filter: {
            archived: false,
            id: { $ne: id },
            pathName: pathName,
        },
        expand: "images",
        limit: 6,
    })
}

async function getProductModifications(
    productId: string,
) {
    return ms.GET(`entity/variant`, {
        filter: {
            archived: false,
            productid: productId,
        },
    })
}


export const msApi = {
    downloadImages,
    getProductById,
    getAllProducts,
    getSliderProducts,
    getProductModifications,
}