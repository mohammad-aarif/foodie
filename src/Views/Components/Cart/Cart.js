import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { BsCartXFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/reducers/cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const totalAmmount = useSelector(state => state.cart.totalCartAmmount);
    const dispatch = useDispatch()

    // Clear Cart
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return (
        <div className='p-10 w-lg'>
            {
            totalAmmount > 0
            ?<div >

                {/* Cart Section Header  */}
                <div className="flex justify-between items-center text-md">
                    <h1>Cart Items</h1>
                    <button
                    onClick={handleClearCart}
                    className='font-medium text-red-600'>
                    <BsCartXFill style={{display: 'inline-block'}}/>
                    Clear cart
                    </button>
                </div>

                {/* Cart Items  */}
                <div >
                    {
                        cartItems.map(data => <CartItem key={data._id} product={data}/>)
                    }
                    
                </div>

                {/* Subtotal Information  */}
                <div className="py-10">
                    <h1>Subtotal: ${totalAmmount}</h1>
                    <button className='w-100 rounded-md px-10 py-2 bg-amber-500'>Check Out</button>
                </div>   
            </div>
            : <div className="m-auto"><h1>Your Cart Is Empty</h1></div>
            }
        </div>
    );
};

export default Cart;