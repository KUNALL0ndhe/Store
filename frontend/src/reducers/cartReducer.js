import { CART_ADD_ITEMS } from "../constants/cartConstants";

export const cartReducer = ( state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEMS:
            const item = action.payload;
            const existsItem = state.cartItems.find(
                (i) => i.product === item.product);

            if (existsItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(
                        (i)=>i.product === existsItem.product        //product is the _id which is set to product and it is checked if both of them is same
                        ? item : i )
                };
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                }
            }
            default:
                return state;
    }
};