
import { SupplierDealEntity, SupplierDealFromDB } from "../../types/entities/SupplierDeal";
import { mainApi } from "./main.api";
const routUrl = "/dealSupplier"
const supplierDealsApi = mainApi.injectEndpoints({
    endpoints: (build) => ({
        findAllSDeals: build.query<SupplierDealFromDB[], unknown>({
            query: () => ({
                url: routUrl,
                method: "GET",
            }),
            providesTags: ["Sdeal"]
        }),
        creatSdeal: build.mutation<SupplierDealFromDB[], SupplierDealEntity>({
            query: (body) => ({
                url: routUrl,
                method: "POST",
                body
            }),
            invalidatesTags: ["Sdeal"]
        }),
        deleteSdeal: build.mutation<SupplierDealFromDB[], string>({
            query: (dealId) => ({
                url: routUrl + "/" + dealId,
                method: "DELETE",
            }),
            invalidatesTags: ["Sdeal"]
        }),
        updateSdeal: build.mutation<SupplierDealFromDB[], { dealId: string, body: SupplierDealEntity }>({
            query: ({ dealId, body }) => ({
                url: routUrl + "/" + dealId,
                method: "patch",
                body
            })
        })
    })
})

export const {
    useCreatSdealMutation,
    useFindAllSDealsQuery,
    useDeleteSdealMutation,
    useUpdateSdealMutation
} = supplierDealsApi