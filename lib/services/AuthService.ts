import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ApiResponse} from "@/model/dto/ApiResponse";
import {BaseQueryError} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {LoginDto} from "@/model/dto/LoginDto";
import {SessionDto} from "@/model/dto/SessionDto";


export const authApi = createApi({
    reducerPath: "api/auth",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/auth/"
    }),
    endpoints: (build) => ({
        getMe: build.query<SessionDto, null>({
            query: () => ({
                url: "me"
            }),
            transformResponse(baseQueryReturnValue: ApiResponse<SessionDto>) {
                return baseQueryReturnValue?.data ?? null
            },
            transformErrorResponse(baseQueryReturnValue: BaseQueryError<any>): ApiResponse<any> {
                return baseQueryReturnValue?.data
            },
        }),
        login: build.mutation<SessionDto, LoginDto>({
            query: (arg) => ({
                url: "login",
                body: arg,
                method: "post"
            }),
            transformResponse(baseQueryReturnValue: ApiResponse<SessionDto>) {
                return baseQueryReturnValue?.data ?? null
            },
            transformErrorResponse(baseQueryReturnValue: BaseQueryError<any>): ApiResponse<any> {
                return baseQueryReturnValue?.data
            },
        }),
    })
})