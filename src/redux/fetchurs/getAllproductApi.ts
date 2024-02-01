import { baseApi } from "../api/baseApi";

const getAllProductApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: '/product/get-flower',
                method: 'GET'
            }),
            providesTags:['product'] as any
        })
    })
})
export const {useGetAllProductQuery}=getAllProductApi