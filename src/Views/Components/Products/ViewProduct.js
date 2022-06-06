import React from 'react';
import { Rating } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const ViewProduct = (props, ref) => {
    const {id} = props
    return (
        <div className='bg-white w-3/4 product-modal rounded-2xl p-10'>
            <div className="grid grid-cols-8">
                {/* Preview Image  */}
                <div className="col-span-3">
                    <img src="https://i.postimg.cc/CLhMtYnM/Products-26-600x600.jpg" alt="" />
                </div>
                <div className="col-span-5 capitalize text-gray-700 p-5">
                    <h1 className='text-2xl font-bold uppercase'>helow world</h1>
                    <h2 className="text-md">Catagory</h2>
                    <div className="pb-10">
                        <div className="flex">
                            <Rating readOnly value={3.5} precision={0.2} emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}/>
                            <p>({3.5})</p>
                        </div>
                        <p>78 riviews</p>
                    </div>
                    <h1 className='text-2xl font-bold uppercase'>$34</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, praesentium.</p>
                    <div className="flex py-2">
                        <button className='uppercase inline-block  p-2 bg-amber-400 rounded-md'>Buy now</button>
                        <button className='uppercase  p-2 bg-gray-100 mx-2 rounded-md'>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
const FullProduct = React.forwardRef(ViewProduct)
export default FullProduct;