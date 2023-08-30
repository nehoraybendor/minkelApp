import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from '../../constant'
import { getAuth } from "firebase/auth"


export const mainApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + '/',
        prepareHeaders(headers, api) {
            headers.set("Authorization", "Bearer "+) // collect token from redux 
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['Worker', 'User'],

})

