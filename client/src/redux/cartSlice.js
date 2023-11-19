import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    cartQuantity: 0,
    cartTotalAmount:0,
    quantity:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            const itemIndex= state.cartItems?.findIndex((item)=>item._id === action.payload._id)
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity +=1;
            }else{
                const tempProduct ={...action.payload,cartQuantity :1}
                state.cartItems?.push(tempProduct)
            }
        },

        removeFromCart:(state,action)=>{
            const removedItem = state.cartItems?.filter((cartItem)=>cartItem._id !== action.payload._id);
            state.cartItems = removedItem
        },

        decreaseCart:(state,action)=>{
            const itemIndex = state.cartItems?.findIndex((cartItem)=>cartItem._id === action.payload._id);
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
                
            } else if(state.cartItems[itemIndex].cartQuantity === 1){
                const removedItem = state.cartItems.filter((cartItem)=>cartItem._id !== action.payload._id);
                state.cartItems = removedItem
            }
        },

        increaseCart:(state,action)=>{
            const itemIndex = state.cartItems?.findIndex((cartItem)=>cartItem._id === action.payload._id)
            state.cartItems[itemIndex].cartQuantity +=1
        },

        deleteAllCart:(state)=>{
            state.cartItems = [];
        },

        cartTotal:(state)=>{
            let {total,quantity} =  state.cartItems?.reduce((cartTotal,cartItem)=>{
                const{price,cartQuantity}=cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal?.total+=itemTotal;
                cartTotal?.quantity+=cartQuantity;
                return cartTotal
            },  {total:0,quantity:0})
            state.cartQuantity =quantity ;
            state.cartTotalAmount =total;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addToCart, decreaseCart, increaseCart, removeFromCart, deleteAllCart, cartTotal
} = cartSlice.actions

export default cartSlice.reducer