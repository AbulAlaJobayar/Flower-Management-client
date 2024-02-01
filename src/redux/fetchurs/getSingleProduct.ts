import { baseApi } from "../api/baseApi"

const getSingleProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'GET'
            }),
            providesTags:['singleProduct'] as any
        })
    })
})
export const {useGetSingleProductQuery}=getSingleProductApi