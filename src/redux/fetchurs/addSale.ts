import { baseApi } from "../api/baseApi"



const addSaleProductApi= baseApi.injectEndpoints({
    endpoints: (builder) =>({
        saleProduct:builder.mutation({
            query:(productInfo)=>({
            url:'sale/createSale',
            method:'POST',
            body:productInfo
            }),
            invalidatesTags:['product','sale'] as any,
        })
    })
})
export const {useSaleProductMutation}=addSaleProductApi