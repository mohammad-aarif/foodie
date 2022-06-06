import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  totalCartItem: 0,
  totalCartAmmount: 0
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
        state.totalCartAmmount += action.payload.price
        state.totalCartItem +=1
      }else{
        const tempItem = {
          ...action.payload,
          itemQuantity: 1,
          cartPrice: action.payload.price
        }
        state.cart.push(tempItem)
        state.totalCartItem +=1
        state.totalCartAmmount += action.payload.price
      }
    },
    subFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item._id === action.payload)
      if(state.cart[itemIndex].itemQuantity > 1){
        state.cart[itemIndex].itemQuantity -= 1
        state.cart[itemIndex].cartPrice -= state.cart[itemIndex].price
        state.totalCartAmmount -= state.cart[itemIndex].price
      }
      state.totalCartItem -= 1
    },
    removeFromCart: (state, action) => {
        const newCart = state.cart.filter(item => item._id !== action.payload.id)
        state.cart = newCart
        state.totalCartItem -= action.payload.itemQuantity
        state.totalCartAmmount -= action.payload.price
    },
    clearCart: (state) => {
      state.cart = []
      state.totalCartAmmount = 0
      state.totalCartItem = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, subFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer