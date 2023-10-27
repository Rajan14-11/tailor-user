import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

let items;
if (typeof window !== "undefined") {
  items = JSON.parse(window?.localStorage.getItem("cart"));
}
const initialState = {
  cartItems: items&& items||{},
  updateingCart: false,
  error: null,
  totalCart: {},
  qty: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state, action) => {
      if (action.cartItems) {
        state.cartItems = action.payload.cartItems;
      }
    },
    addTocart: (state, action) => {
      const newQty = action.payload.newQty || 1
      const qty = state.cartItems[action.payload.product._id]
        ? parseInt(state.cartItems[action.payload.product._id].qty + newQty)
        : 1;
      state.updateingCart = true;
      state.cartItems[action.payload.product._id] = {
        ...action.payload.product,
        qty,
      };
      state.qty = qty+newQty;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
      const newItems = Object.keys(state.cartItems).map((key) => {
        const { _id, qty } = state.cartItems[key];
        return {
          product: _id,
          quantity: qty,
        };
      });
      console.log(newItems);
      const payload = {
        newItems,
      };
      state.updateingCart = false;
      // if(action.payload.userAuth){
      //   action.payload.addToCartMutation(payload);
      // }
      state.totalCart = payload;

      //   state.totalCart = dataPayload;
    },
    // addTocart: (state, action) => {
    //   const qty = state.cartItems[action.payload.product._id]
    //     ? parseInt(
    //         state.cartItems[action.payload.product._id].qty +
    //           action.payload.newQty
    //       )
    //     : 1;
    //   scartItems[action.payload.product._id] = {
    //     ...action.payload.product,
    //     qty,
    //   };

    //   const payload = {
    //     newItems: [
    //       {
    //         product: action.payload.product._id,
    //         quantity: qty,
    //       },
    //     ],
    //   };
    //   state.totalCart = payload;
    // },
    emptyCart: (state, action) => {
      state.cartItems = {};
      if (action.payload.ordered == true) {
        state.totalCart = {};
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("cart");
        }
      }
      state.qty = 1;
    },
    updateCart: (state) => {
      const storeState = store.getState();
      if (typeof window !== "undefined") {
        let items = window.localStorage.getItem("cart")
          ? JSON.parse(window.localStorage.getItem("cart"))
          : null;

        if (storeState?.user?.isAuthenticated) {
          const payload = {
            newItems: Object.keys(items).map((key, index) => {
              return {
                quantity: items[key].qty,
                product: items[key]._id,
              };
            }),
          };
          state.totalCart =payload
        }
      }
    },
  },
});

export const { addTocart, emptyCart, getCartItems, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
