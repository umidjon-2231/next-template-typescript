import {useRouter} from "next/router";
import {useMemo} from "react";


type UsePagination = (totalPages?: number) => {
    previousPage: () => void; lastPage: () => void; firstPage: () => void; nextPage: () => void; page: number
}
export const usePagination: UsePagination = (totalPages) => {
    const router = useRouter()
    const page = isNaN(parseInt(router.query.page as string)) ? 0 : parseInt(router.query.page as string)
    return {
        page: useMemo(() => page, [router.query.page]),
        nextPage: () => {
            router.push(`${router.pathname}?page=${page >= totalPages ? totalPages : page + 1}`).then()
        },
        previousPage: () => {
            router.push(`${router.pathname}?page=${page < 1 ? page : page - 1}`).then()
        },
        lastPage: () => {
            router.push(`${router.pathname}?page=${totalPages - 1}`).then()
        },
        firstPage: () => {
            router.push(`${router.pathname}`).then()
        }
    }
}