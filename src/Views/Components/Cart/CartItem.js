import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineCancel } from "react-icons/md";
import { addToCart, removeFromCart, subFromCart } from '../../../redux/reducers/cartSlice';
import { useSelector } from 'react-redux';
const CartItem = ({product}) => {
    const{image, name, _id, cartPrice, itemQuantity: count} = product
    const dispatch = useDispatch()

    const handleAddBtn = (product) => {
        dispatch(addToCart(product))
        console.log(product)
    }

    const handleSubBtn = (id) => {
        dispatch(subFromCart(id))
        // console.log(id);
    }

    const handleRemoveCart = (id, price, itemQuantity) => {
        const data = {
            id,
            price,
            itemQuantity
        }
        dispatch(removeFromCart(data))
        console.log(data);
    }
    return (
        <div className="grid my-1 grid-cols-10 hover:shadow-lg bg-gray-50 rounded-md">
            <div className="col-span-1 p-1">
                <img className='w-16' src={image} alt="" />
            </div>
            <div className="col-span-4 my-auto">
                <h1 className="font-bold text-gray-700">{name}</h1>
            </div>


            <div className="col-span-3 bg-amber-50 font-bold m-auto">
                {/* Add to Cart Button  */}
                <button 
                onClick={() => handleAddBtn(product)}
                className='font-bold hover:bg-gray-200 px-3 py-1 rounded-md'>+</button>

                <h1 className='mx-3 text-xl inline-block text-red-600'>{count}</h1>

                <button 
                disabled={count <= 1}
                onClick={() => handleSubBtn(_id)}
                className='font-bold hover:bg-gray-200 px-3 py-1 rounded-md'>-</button>
            </div>


            <div className="col-span-1 my-auto">
                <h1 className="font-bold text-gray-700">${cartPrice}</h1>
            </div>

            <div className="col-span-1 my-auto">
                <button 
                onClick={() => handleRemoveCart(_id, cartPrice, count)}
                className="p-2 rounded-md hover:bg-red-700 bg-red-600 text-white"><MdOutlineCancel /></button>
            </div>
        </div>
    );
};

export default CartItem;