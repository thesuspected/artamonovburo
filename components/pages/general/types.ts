export interface TableType {
    title: string
    list: string[]
}

export interface ImageGridType {
    src: string
    rows: number
    cols: number
    alt: string
}

export interface SelectType {
    label: string
    value: string
}

export interface QuizType {
    question: string
    selected: number | string | string[]
    answers: SelectType[]
    type: string
}