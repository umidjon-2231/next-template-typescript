export type SetValue<T> = {
    [Key in keyof T]?: T[Key]
}