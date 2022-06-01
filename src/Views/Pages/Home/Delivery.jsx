import React from 'react';
import '../../../css/delivery.css'
import deliveryMan from '../../../assets/images/delivery_man.png'
const Delivery = () => {
    return (
        <div className='p-10'>
            <div className="delivery flex justify-between items-center uppercase h-full px-20">
                <div className="font-bold pt-20 text-white">
                    <h1 className='text-7xl'>15 Minutes</h1>
                    <h1 className='text-3xl'>You Order we deliver!</h1>
                    <p className="inline-block rounded-full px-7 py-2 mt-2 bg-amber-400 text-xl text-red-800 hover:bg-white font-bold uppercase">Order now</p>
                </div>
                <div className="w-auto">
                    <img src={deliveryMan} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;