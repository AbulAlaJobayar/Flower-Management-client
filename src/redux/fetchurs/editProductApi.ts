import { baseApi } from "../api/baseApi"




const editProductApi= baseApi.injectEndpoints({
    endpoints: (builder) =>({
        editProduct:builder.mutation({
            query:({id,productInfo})=>({
            url:`product/${id}`,
            method:'PATCH',
            body:productInfo
            }),
            invalidatesTags:['product'] as any
        })
    })
})
export const {useEditProductMutation}=editProductApi