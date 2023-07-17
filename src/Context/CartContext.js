import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();

const cartData = {
    id: 1,
    products: [
      {
        id: 59,
        title: "Spring and summershoes",
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
      },
      {
        id: 88,
        title: "TC Reusable Silicone Magic Washing Gloves",
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        price: 40,
        quantity: 2,
        total: 80,
        discountPercentage: 13.1,
        discountedPrice: 70,
      },
      {
        id: 95,
        title: "Wholesale cargo lashing Belt",
        price: 930,
        quantity: 1,
        total: 930,
        discountPercentage: 17.67,
        discountedPrice: 766,
      },
      {
        id: 39,
        title: "Women Sweaters Wool",
        price: 600,
        quantity: 2,
        total: 1200,
        discountPercentage: 17.2,
        discountedPrice: 994,
      },
    ],
    total: 2328,
    discountedTotal: 1941,
    userId: 97,
    totalProducts: 5,
    totalQuantity: 10,
  }

export const initialState = {
  cartproducts: cartData.products ,
  quantity: 0,
  loading: true,
};

export const actionTypes = {
  INCREASE_COUNT: "INCREASE_COUNT",
  DECREASE_COUNT: "DECREASE_COUNT",
  GET_CART_REQ: "GET_CART_REQ",
  GET_CART_SUCCESS: "GET_CART_SUCCESS",
  GET_CART_FAILURE: "GET_CART_FAILURE",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_CART: "CLEAR_CART",
};

// export const increase = (id)=>{
//   const item = cartData.products.find(
//     (item) => item.id === id
//   );
//   console.log(item)
//   item.quantity++;
// }


export function reducer(state, action) {
  // console.log("hii")
   const item = state.cartproducts.find(
    (item) => item.id === action.payload
  );
  // console.log(action,state);
  // const item = state?.cartproducts?.products.find(
  //   (item) => item.id === action.payload
  // );
  // console.log(item);
  switch (action.type) {
    case actionTypes.GET_CART_REQ:
      return {...state,loading:true}
    case actionTypes.GET_CART_SUCCESS:
      return {...state,loading:false,cartproducts:cartData.products,quantity:cartData.totalQuantity}
    case actionTypes.GET_CART_FAILURE:
      return {...state,loading:false}

    case actionTypes.INCREASE_COUNT:
      item && item.quantity++;
      return {
        ...state,
        cartproducts:[...state.cartproducts]
      }
      break;
    case actionTypes.DECREASE_COUNT:
      item.quantity--;
      break;
    case actionTypes.REMOVE_ITEM:
      console.log(state)
      return {
        ...state,
        cartproducts: state.cartproducts.filter(
          (item) => item.id !== action.payload
          ),
        };

    case actionTypes.CLEAR_CART:
      return { ...state, cartproducts: [] };

  default:
    return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartStateContext.Provider value={{ state, dispatch }}>
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartStateContext = () => useContext(CartStateContext);
