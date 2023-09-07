import { ClientDealEntity, ClientDealFromDB } from "../../types/entities/clientDeal";
import { mainApi } from "./main.api";
const routUrl = "/dealClient"
const clientDealsApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        findAllCDeals: build.query<ClientDealFromDB[], undefined>({
            query: () => ({
                url: routUrl,
                method: "GET",
            }),
            providesTags: ["Cdeal"]
        }),
        creatCdeal: build.mutation<ClientDealFromDB[], ClientDealEntity>({
            query: (body) => ({
                url: routUrl,
                method: "POST",
                body
            }),
            invalidatesTags: ["Cdeal"]
        }),
        deleteCdeal: build.mutation<ClientDealFromDB[], string>({
            query: (dealId) => ({
                url: routUrl + "/" + dealId,
                method: "DELETE",
            }),
            invalidatesTags: ["Cdeal"]
        }),
        updateCdeal: build.mutation<ClientDealFromDB[], { dealId: string, body: ClientDealEntity }>({
            query: ({ dealId, body }) => ({
                url: routUrl + "/" + dealId,
                method: "patch",
                body
            })
        })
    })
})

export const {
    useCreatCdealMutation,
    useDeleteCdealMutation,
    useFindAllCDealsQuery,
    useUpdateCdealMutation
} = clientDealsApi