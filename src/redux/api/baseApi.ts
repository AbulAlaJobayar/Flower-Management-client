import { createApi} from '@reduxjs/toolkit/query/react'
import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { logout, setUser } from "../fetchurs/auth/authSlice";



const baseQuery = fetchBaseQuery({
    baseUrl: 'https://flowermanagemant.vercel.app/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
  
      if (token) {
        headers.set('authorization', `${token}`);
      }
  
      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.status === 401) {
      //* Send Refresh
      console.log('Sending refresh token');
  
      const res = await fetch('https://flowermanagemant.vercel.app/api/v1/user/refresh-token', {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await res.json();
  
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
  });

