import { baseApi } from "../api/baseApi"


const getAllSellApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSell: builder.query({
            query: () => ({
                url: '/sale/allSales',
                method: 'GET'
            }),
            providesTags:['sale'] as any
        })
    })
})
export const {useGetAllSellQuery}=getAllSellApi