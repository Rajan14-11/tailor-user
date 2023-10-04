import { api} from "../../helpers/urlConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const Api = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers: any) => {
      headers.set("authToken", `${token ? `Bearer ${token}` : ""}`);
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation<any, any>({
      query: (body) => ({
        url: "/signup/",
        method: "POST",
        body: { ...body },
      }),
    }),
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: "/signin/",
        method: "POST",
        body: { ...body },
      }),
    }),

    getCart: builder.mutation<any, any>({
      query: (body) => ({
        url: "/user/getCartItems",
        method:"POST",
        body
      }),
    }),
    addToCart: builder.mutation<any, any>({
      query: (body) => ({
        url: "/user/cart/addtocart",
        method: "POST",
        body,
      }),
    }),
    removeItem: builder.mutation<any, any>({
      query: (body) => ({
        url: "/user/cart/removeItem",
        method: "POST",
        body,
      }),
    }),
    getProducts: builder.query<any, any>({
      query: () => ({
        url: "product/getProducts",
        method: "POST",
      }),
    }),
    getOrders: builder.query<any, any>({
      query: () => ({
        url: "order/getCustomerOrders",
        method: "POST",
      }),
    }),
    updateOrder: builder.mutation<any, any>({
      query: (body) => ({
        url: "order/update",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useAddToCartMutation,
  useRemoveItemMutation,
  useGetCartMutation,
  useGetProductsQuery,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} = Api;