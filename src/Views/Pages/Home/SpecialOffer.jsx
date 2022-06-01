import React from 'react';
import '../../../css/specialoffer.css'
const SpecialOffer = () => {
    return (
        <div className='p-32'>
            <div className="grid grid-cols-3  gap-2">

                <div className="col-span-1 so-burger p-5 bg-center rounded-2xl h-40">
                    <div className="so-text">
                        <h1 className="text-3xl font-semibold uppercase">Big Burger <br /> Premium</h1>
                        <p className="inline-block rounded-xl px-5 py-1 mt-2 bg-red-600 text-white font-semibold uppercase">from $10</p>
                    </div>
                </div>
                

                <div className="col-span-1 so-pizza p-5 bg-center rounded-2xl h-40">
                    <div className="so-text">
                        <h1 className="text-3xl text-amber-400 font-semibold uppercase">Big Burger <br /> Premium</h1>
                        <p className="inline-block rounded-xl px-5 py-1 mt-2 bg-amber-400 text-red-700 font-semibold uppercase">from $7.99</p>
                    </div>
                </div>

                <div className="col-span-1 so-chicken p-5 bg-center rounded-2xl h-40">
                    <div className="so-text">
                        <h1 className="text-3xl text-white font-semibold uppercase">special bbq <br /> chicken</h1>
                        <p className="inline-block rounded-xl px-5 py-1 mt-2 bg-white text-red-600 font-semibold uppercase">Free Pepsi</p>
                    </div>
                </div>

            </div>

            <div className="grid py-4 gap-4 grid-cols-2">

                <div className="col-span-1 so-mango p-5 bg-center rounded-2xl h-60">
                    <h1 className="text-3xl text-white font-bold uppercase">special mango juice <br />for special customer</h1>
                    <p className='text-gray-200'>every customer is very special For us . <br /> visit our any outlet and get special service.</p>
                    <p className="inline-block rounded-xl px-5 py-1 mt-2 bg-amber-400 text-red-700 font-semibold uppercase">Visit Us</p>
                </div>
                
                <div className="col-span-1 so-pepsi p-5 bg-center rounded-2xl h-60">
                    <h1 className="text-3xl font-bold uppercase">special mango juice <br />for special customer</h1>
                    <p className='text-gray-800'>every customer is very special For us . <br /> visit our any outlet and get special service.</p>
                    <p className="inline-block rounded-xl px-5 py-1 mt-2 bg-red-600 text-white font-semibold uppercase">Visit Us</p>
                </div>

            </div>
        </div>
    );
};

export default SpecialOffer;