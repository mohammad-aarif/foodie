import React from 'react';
import { NavLink } from 'react-router-dom';
import shipping from '../../../assets/images/shipping.png'
import payment from '../../../assets/images/payment.png'
import cancel from '../../../assets/images/cancel.png'
import review from '../../../assets/images/review.png'
import history from '../../../assets/images/history.png'

const ProfileMenu = () => {
    return (
        <div className="grid grid-cols-5 uppercase px-40 py-10 text-center">

        <NavLink 
        to='pendingpayment' 
        className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
            <img src={payment} alt="" />
            <div className="font-light text-md uppercase">To Pay</div>
        </NavLink>
        
        <NavLink 
        to='shipping' 
        className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
            <img src={shipping} alt="" />
            <div className="font-light text-md uppercase">Shipping</div>
        </NavLink>
        
        <NavLink 
        to='review' 
        className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
            <img src={review} alt="" />
            <div className="font-light text-md uppercase">To review</div>
        </NavLink>
        
        <NavLink 
        to='cancel' 
        className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
            <img src={cancel} alt="" />
            <div className="font-light text-md uppercase">Canceled Order</div>
        </NavLink>
        
        <NavLink 
        to='history' 
        className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
            <img src={history} alt="" />
            <div className="font-light text-md uppercase">History</div>
        </NavLink>
    </div>
    );
};

export default ProfileMenu;