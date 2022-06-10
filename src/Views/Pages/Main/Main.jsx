import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Auth from '../Auth/Auth';
import FBurger from '../Home/Fabourite Menu/FBurger';
import FChicken from '../Home/Fabourite Menu/FChicken';
import FCombo from '../Home/Fabourite Menu/FCombo';
import FOrganic from '../Home/Fabourite Menu/FOrganic';
import FPizza from '../Home/Fabourite Menu/FPizza';
import Home from '../Home/Home';
import Products from '../Products/Products';
import OrderCancel from '../Profile/Orders/OrderCancel';
import OrderHistory from '../Profile/Orders/OrderHistory';
import OrderShipped from '../Profile/Orders/OrderShipped';
import PaymentOrder from '../Profile/Orders/PaymentOrder';
import ReviewOrder from '../Profile/Orders/ReviewOrder';
import Profile from '../Profile/Profile';
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} >
                    <Route path='/' element={<FCombo/>}/>
                    <Route path='fcombo' element={<FCombo/>}/>
                    <Route path='fpizza' element={<FPizza/>}/>
                    <Route path='fburger' element={<FBurger/>}/>
                    <Route path='fchicken' element={<FChicken/>}/>
                    <Route path='forganic' element={<FOrganic/>}/>
                </Route>
                <Route path='/home' element={<Home/>} />
                <Route path='/authuser' element={<Auth/>} />
                <Route path='/product' element={<Products/>} />
                <Route path='/profile' element={<Profile />} >
                    <Route path='/profile' element={<PaymentOrder/>} />
                    <Route path='pendingpayment' element={<PaymentOrder/>} />
                    <Route path='shipping' element={<OrderShipped />} />
                    <Route path='review' element={<ReviewOrder/>} />
                    <Route path='cancel' element={<OrderCancel/>} />
                    <Route path='history' element={<OrderHistory/>} />
                </Route>
            </Routes>
        </main>
    );
};

export default Main;