import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  itemCount: 0,
  cartTotal: 0
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item._id === action.payload._id)
      if(itemIndex >= 0){
        let price = state.cart[itemIndex].cartPrice + action.payload.price
        state.cart[itemIndex].itemQuantity += 1
        state.cart[itemIndex].cartPrice = price
        state.cartTotal += action.payload.price
        state.itemCount +=1
      }else{
        const tempItem = {
          ...action.payload,
          itemQuantity: 1,
          cartPrice: action.payload.price
        }
        state.cart.push(tempItem)
        state.itemCount +=1
        state.cartTotal += action.payload.price
      }
    },
    removeFromCart: (state) => {
      state.value -= 1
    },
    clearCart: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer