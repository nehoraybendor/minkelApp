import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL  } from '../../constant'

export const mainApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL +'/'}),
    endpoints: () => ({}),
})

