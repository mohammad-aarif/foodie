import React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FaSearch } from 'react-icons/fa';
import '../../../css/product.css'
import FullProduct from './ViewProduct';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../redux/reducers/cartSlice'

const Product = ({product}) => {
    const [viewState, setViewState] = useState(false)
    const {name, price, image, _id} = product
    const dispatch = useDispatch()
    
    return (            
            <div className="text-center product uppercase bg-white relative rounded-lg hover:shadow-md px-10 py-14">
                <img src={image} alt="" />
                {/* Product Label  */}
                <span className='porduct-label shadow-md rounded-full p-2 text-white bg-red-600'>-20%</span>
                <div className="item-text">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <h1 className="text-xl text-red-600 font-bold">${price}</h1>
                </div>
                {/* Veiw Button  */}
                <button onClick={() => setViewState(!viewState)} className='p-5 rounded-full product-view hover:bg-red-600'><FaSearch style={{color: 'white'}} /></button>

                {/* Add to cart button */}
                <button 
                onClick={() => dispatch(addToCart(product))}
                className="inline-block my-3 text-xs font-bold add-to-cart-button border border-red-600 py-3 px-10 rounded-full hover:bg-red-600">ADD TO CART</button>

                {/* Product Modal  */}
                <Modal 
                 open={viewState}
                 onClose ={() => setViewState(!viewState)}
                 >
                    <FullProduct id={_id}/>
                </Modal>
            </div>    
    );
};

export default Product;