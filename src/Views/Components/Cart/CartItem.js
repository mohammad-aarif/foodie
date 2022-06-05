import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/reducers/cartSlice';
const CartItem = ({product}) => {
    const{image, name, cartPrice:price, itemQuantity: count} = product
    const dispatch = useDispatch()

    const handleAddBtn = (product) => {
        dispatch(addToCart(product))
        // console.log(product)
    }
    return (
        <div className="grid my-1 grid-cols-8 hover:shadow-lg bg-gray-50 rounded-md">
            <div className="col-span-1 p-1">
                <img className='w-16' src={image} alt="" />
            </div>
            <div className="col-span-3 my-auto">
                <h1 className="font-bold text-gray-700">{name}</h1>
            </div>
            <div className="col-span-3 bg-amber-50 font-bold m-auto">
                {/* Add to Cart Button  */}
                <button 
                onClick={() => handleAddBtn(product)}
                className='font-bold hover:bg-gray-200 px-3 py-1 rounded-md'>+</button>

                <h1 className='mx-3 text-xl inline-block text-red-600'>{count}</h1>

                <button className='font-bold hover:bg-gray-200 px-3 py-1 rounded-md'>-</button>
            </div>
            <div className="col-span-1 my-auto">
                <h1 className="font-bold text-gray-700">${price}</h1>
            </div>
        </div>
    );
};

export default CartItem;