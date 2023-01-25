import {DEFAULT_LOCALE, Language, Pages} from "@/model/types/translate";
import {useRouter} from "next/router";
import {useMemo} from "react";
import dictionary, {Dictionary} from "@/locales";

export function getDictionary<T extends Pages>(page: T, locale?: Language): Dictionary[T] {
    return dictionary[locale ?? DEFAULT_LOCALE][page] as Dictionary[T]
}

export const useDictionary = <T extends Pages>(page: T) => {
    const router = useRouter()
    return useMemo(() => getDictionary<T>(page, router.locale), [router.locale, page])
}