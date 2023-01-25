import {combineReducers, configureStore} from "@reduxjs/toolkit";
import globalReducer from "./reducers/GlobalSlice";
import {authApi} from "@/lib/services/AuthService";

const rootReducer = combineReducers({
    globalReducer,
    [authApi.reducerPath]: authApi.reducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        authApi.middleware,
    )
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']