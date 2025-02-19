export interface ProductImage {
    title: string
    fullHref: string
    miniatureHref: string
}

export interface Product {
    id: string
    name: string
    pathName: string
    description: string
    price: number
    images: ProductImage[]
}