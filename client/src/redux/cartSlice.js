import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0,
    subtotal: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            state.subtotal += action.payload.price;
        },
        getCart: (state) => {
            return state;
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload._id);
            if (index >= 0) {
                state.total -= state.cart[index].price * state.cart[index].quantity;
                state.subtotal -= state.cart[index].price;
                state.cart.splice(index, 1);
            }
        },
        deleteAllCart: (state) => {
            state.cart = []
        }

    },
})

// Action creators are generated for each case reducer function
export const {
    addToCart, getCart, removeFromCart, deleteAllCart
} = cartSlice.actions

export default cartSlice.reducer