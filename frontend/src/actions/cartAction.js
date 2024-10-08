import axios from "axios";
import { CART_ADD_ITEMS } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEMS,
        payload: {
            product: data._id,
            name: data.name,
            image: data.name,
            price: data.name,
            qty,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};