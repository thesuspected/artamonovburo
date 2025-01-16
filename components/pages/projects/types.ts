import type { ImageGridType } from "~/components/pages/general/types"

export interface ProjectInfoType {
    name: string
    value: string
}

export interface ProjectBlockType {
    title: string
    subtitle?: string
    images: ImageGridType[]
}

export interface ProjectType {
    title: string
    subtitle: string
    src: string
    info: ProjectInfoType[],
    blocks: ProjectBlockType[],
}