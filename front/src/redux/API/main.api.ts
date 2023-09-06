import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from '../../constant'
import { getAuth } from "firebase/auth"
import { RootState } from "../store"


export const mainApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + '/',
        prepareHeaders(headers, api) {
            const token = (api.getState() as RootState).user.token
            if(token){
                headers.set("Authorization", "Bearer " + token)
            } 
            return headers// collect token from redux 
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['Worker', 'User'],

})

