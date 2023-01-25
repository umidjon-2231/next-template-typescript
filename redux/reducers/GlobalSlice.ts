import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SetValue} from "@/model/types/SetValue";
import {THEME_CHOOSE} from "@/model/types/constants";
import {detectTheme} from "@/lib/tools";


interface IInitialState {
    theme: "light" | "dark"
    isAutoTheme: boolean
    token: string
}

export const initialState: IInitialState = {
    token: null,
    theme: "light",
    isAutoTheme: true,
}

export const globalSlice = createSlice({
    reducers: {
        setValue(state, action: PayloadAction<SetValue<IInitialState>>) {
            for (let payloadKey in action.payload) {
                state[payloadKey] = action.payload[payloadKey]
            }
        },
        changeTheme(state, action: PayloadAction<THEME_CHOOSE>) {
            if (action.payload === 'auto' || action.payload === null) {
                state.isAutoTheme = true
                state.theme = detectTheme()
            } else {
                state.isAutoTheme = false
                state.theme = action.payload
            }
            switch (state.theme) {
                case "light": {
                    document.body.classList.remove('dark')
                    break
                }
                case "dark": {
                    document.body.classList.add("dark")
                }
            }
            localStorage.setItem('theme', action.payload ?? 'auto')
        },
    },
    name: "global",
    initialState
})

export default globalSlice.reducer