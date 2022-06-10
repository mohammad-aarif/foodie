import React from 'react';
import logo from '../../../assets/images/foodie.png'
import '../../../css/header.css'
import Drawer from '@mui/material/Drawer';
import Dialog from '@mui/material/Dialog'
import { FaSearch, FaUserAstronaut, FaShoppingBag } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../../Components/Cart/Cart';
import { useSelector } from 'react-redux';
import AuthLogin from '../Auth/Auth';


const Header = () => {
    const [cartState, setCartState] = useState(false)
    const [loginView, setLoginView] = useState(false)

    const itemCount = useSelector(state => state.cart.totalCartItem)
    const user = useSelector(data => data.user.user)

    // Toggle Buttons
    const handleOpenCart = () => {
        setCartState(!cartState)
    }
    const handleOpenLogin = () => {
        setLoginView(!loginView)
    }
    
    return (
        <div>
            {/* Navigation For Desctop  */}
            <div className="header py-5 h-full bg-amber-50 backdrop-blur-sm mx-auto px-16 grid grid-cols-10">
                {/* Logo  */}
                <div className="col-span-2 w-7/12">
                    <img src={logo} alt="" />
                </div>
                {/* Search Bar  */}
                <div className="col-span-3 mx-8 rounded-full my-auto search_area">
                    <form className='flex justify-between align-middle'>
                        <input className='search_field rounded-full' type="text"/>
                        <button className ='bg-amber-400 p-4 m-1 rounded-full' type='submit'><FaSearch /></button>
                    </form>
                </div>

                {/* Menu Items  */}
                <div className="col-span-3">
                    <div className="flex font-medium items-center h-full menu text-xl">
                        <NavLink 
                        className={({isActive}) => isActive ? 'nav-active' : null} 
                        to='/'>Home</NavLink>
                        <NavLink 
                        className={({isActive}) => isActive ? 'nav-active' : null} 
                        to='/shop'>Shop</NavLink>
                        <NavLink 
                        className={({isActive}) => isActive ? 'nav-active' : null} 
                        to='/offers'>Products</NavLink>
                        <NavLink 
                        className={({isActive}) => isActive ? 'nav-active' : null} 
                        to='/product'>Blog</NavLink>
                    </div>
                </div>

                {/* Buttons  */}
                <div className="col-span-2">
                    <div className="flex items-center">
                        
                        {user.email
                        ? <Link to='/profile'>{user.email}</Link>
                        : <button onClick={handleOpenLogin}>
                            <FaUserAstronaut style={{fontSize: '1.6em'}}/>
                        </button>
                        }

                        {/* Cart Button  */}
                        <button onClick={handleOpenCart} className='p-4 shadow-xl relative mx-2 bg-red-500 rounded-full'>
                            <span style={{top:'-2px', right: '-5px'}} className='text-xs shadow-xl py-1 px-2 rounded-full absolute bg-amber-400 '>{itemCount}</span>
                            <FaShoppingBag style={{color: 'white', fontSize: '1.4em'}}/>
                        </button>
                    </div>
                </div>

                {/* Cart Drawer  */}
                <Drawer
                    open= {cartState}
                    onClose={() => setCartState(!cartState)}
                    anchor= 'right'>
                        <Cart />
                </Drawer>
                {/* Loging Panel  */}

                <Dialog
                fullScreen
                open={loginView}
                onClose={() => setLoginView(!loginView)}>
                <AuthLogin view={setLoginView}/>
                </Dialog> 
            </div>
        </div>
    );
};

export default Header;