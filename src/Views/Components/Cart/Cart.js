import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const totalAmmount = useSelector(state => state.cart.totalCartAmmount);
    return (
        <div className='p-10 w-lg'>
            <div className="">
                {
                    cartItems.map(data => <CartItem key={data._id} product={data}/>)
                }
                
            </div>
            <div className="py-10">
                <h1>Subtotal: ${totalAmmount}</h1>
                <button className='w-100 rounded-md px-10 py-2 bg-amber-500'>Check Out</button>
            </div>   
        </div>
    );
};

export default Cart;