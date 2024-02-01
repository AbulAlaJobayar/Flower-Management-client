import { baseApi } from "../api/baseApi"



const removeSingleProduct= baseApi.injectEndpoints({
    endpoints: (builder) =>({
        removeProduct:builder.mutation({
            query:(id)=>({
            url:`product/${id}`,
            method:'DELETE',
            }),
            invalidatesTags: ['product'] as any
        })
    })
})
export const {useRemoveProductMutation}=removeSingleProduct