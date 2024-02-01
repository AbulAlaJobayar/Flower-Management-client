import { baseApi } from "../api/baseApi"



const addProductApi= baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addProduct:builder.mutation({
            query:(productInfo)=>({
            url:'product/create-flower',
            method:'POST',
            body:productInfo
            }),
            invalidatesTags:['product'] as any
        })
    })
})
export const {useAddProductMutation}=addProductApi