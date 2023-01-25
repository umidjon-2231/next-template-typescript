export type Comparator = "asc" | "desc"

export interface Sort<T> {
    sortBy?: keyof T,
    comparator?: Comparator
}