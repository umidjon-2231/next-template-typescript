import {Sort} from "./Sort";

export interface CrudState<T, F> {
    chosen?: T,
    addModal?: boolean,
    editModal?: boolean,
    deleteModal?: boolean,
    viewModal?: boolean
    sort?: Sort<T>
    filter?: F
}