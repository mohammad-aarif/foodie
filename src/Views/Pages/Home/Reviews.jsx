import React from 'react';
import reviewIcon from '../../../assets/images/review_icon.png'
const Reviews = () => {
    return (
        <div className='py-20 bg-amber-50'>
            <div className="px-40">
                <div className="w-20 mx-auto">
                    <img src={reviewIcon} alt="" />
                </div>
                <div className="text-center pt-12 uppercase">
                    <p className='text-xl font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, sunt?</p>
                    <h1 className="font-bold pt-3 text-2xl">Name Name</h1>
                    <h1 className="font-bold text-gray-700">Name Name</h1>
                </div>
            </div>
        </div>
    );
};

export default Reviews;