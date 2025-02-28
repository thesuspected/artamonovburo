export interface ProductImage {
    title: string
    fullHref: string
    miniatureHref: string
    isLoaded?: boolean
}

export interface ProductModification {
    name: string
    value: string
    price: number
}

export interface Product {
    id: string
    name: string
    pathName: string
    description: string
    price: number
    images: ProductImage[]
    modifications: ProductModification[]
}