
import { api } from "../../helpers/urlConfig";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "@/pages/_app";
import Cookies from "js-cookie";



export const Api = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers: any) => {
      headers.set("authToken", `${token ? `Bearer ${token}` : `Bearer ${Cookies.get('token')}`}`);
    },
  }),
  tagTypes: ["Cart", "wishlist"],
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
    verifyEmail: builder.mutation<any, any>({
      query: (body) => ({
        url: "/admin/verify/",
        method: "POST",
        body,
      }),
    }),

    getCart: builder.mutation<any, any>({
      query: (body) => ({
        url: "/user/getCartItems",
        method: "POST",
      }),
    }),
    addToCart: builder.mutation<any, any>({
      query: (body) => ({
        url: "/user/cart/addtocart",
        method: "POST",
        body,
        headers: {
          authToken: `${token && `Bearer ${token}`}`,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    removeItem: builder.mutation<any, any>({
      query: (body) => ({
        url: "/user/cart/removeItem",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),
    getProducts: builder.query<any, any>({
      query: (id) => ({
        url: `/product/getProductsBySeller/${id}`,
      }),
    }),
    getProductById: builder.query<any, any>({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
    getOrders: builder.query<any, any>({
      query: () => ({
        url: "/getOrders",
        // method: "POST",
        headers: { 'authToken': `Bearer ${Cookies.get("token")}` },
      }),
    }),
    updateOrder: builder.mutation<any, any>({
      query: (body) => ({
        url: "order/update",
        method: "POST",
        body,
      }),
    }),
    getSellersByPincode: builder.query<any, any>({
      query: (pincode) => ({
        url: `/find-user/${pincode}`,
      }),
    }),
    getUserAddresses: builder.mutation<any, any>({
      query: (body) => ({
        url: `/user/getaddress`,
        method: "POST",
      }),
    }),
    createUserAddresses: builder.mutation<any, any>({
      query: (body) => ({
        url: `/user/address/create`,
        method: "POST",
        body,
      }),
    }),
    AddOrder: builder.mutation<any, any>({
      query: (body) => ({
        url: `/addOrder`,
        method: "POST",
        body,
      }),
    }),
    getOrderDetails: builder.mutation<any, any>({
      query: (body) => ({
        url: `/getOrder`,
        method: "POST",
        body,
      }),
    }),
    getKey: builder.query<any, any>({
      query: () => ({
        url: "/getkey",
      }),
    }),
    checkout: builder.mutation<any, any>({
      query: (body) => ({
        url: "/checkout",
        method: "POST",
        body,
      }),
    }),
    paymentVerification: builder.mutation<any, any>({
      query: (body) => ({
        url: "/getkey",
        method: "POST",
        body,
      }),
    }),
    getWishlist: builder.query<any, any>({
      query: (body) => ({
        url: "/wishlist",
        headers: { authToken: `Bearer ${token && Cookies.get("token")}` },
      }),
      providesTags: ["wishlist"],
    }),
    addReview: builder.mutation<any, any>({
      query: (body) => ({
        url: "/product/createReview",
        method: "POST",
        body,
      }),
    }),
    addToWishlist: builder.mutation<any, any>({
      query: (body) => ({
        url: "/create-wishlist",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["wishlist"],
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
  useVerifyEmailMutation,
  useGetSellersByPincodeQuery,
  useLazyGetSellersByPincodeQuery,
  useGetProductByIdQuery,
  useGetUserAddressesMutation,
  useCreateUserAddressesMutation,
  useAddOrderMutation,
  useGetOrderDetailsMutation,
  useGetKeyQuery,
  useCheckoutMutation,
  usePaymentVerificationMutation,
  useGetWishlistQuery,
  useAddReviewMutation,
  useAddToWishlistMutation
} = Api;
