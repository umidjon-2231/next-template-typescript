import {useAppSelector} from "./redux";
import {useMemo} from "react";
import {useRouter} from "next/router";
import {Language} from "@/model/types/translate";

interface SessionType {
    token: string,
    language: Language,
}

export const useSession = (): SessionType => {
    const token = useAppSelector(state => state.globalReducer.token)
    const router = useRouter()
    return useMemo<SessionType>(() => ({
        token,
        language: router.locale.toUpperCase()
    }), [token, router.locale])
}