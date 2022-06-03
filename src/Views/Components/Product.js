import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../css/product.css'

const Product = ({product}) => {
    const {name, price, image} = product
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
                <button className='p-5 rounded-full product-view hover:bg-red-600'><FaSearch style={{color: 'white'}} /></button>

                {/* Add to cart button */}
                <button className="inline-block my-3 text-xs font-bold add-to-cart-button border border-red-600 rounded-full py-3 px-10 hover:bg-red-600">ADD TO CART</button>
            </div>    
    );
};

export default Product;