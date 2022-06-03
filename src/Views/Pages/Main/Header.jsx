import React from 'react';
import logo from '../../../assets/images/foodie.png'
import '../../../css/header.css'
import { FaSearch, FaUserAstronaut, FaShoppingBag } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
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

                <div className="col-span-2">
                    <div className="flex items-center">
                        <Link to='/'><FaUserAstronaut style={{fontSize: '1.6em'}}/></Link>

                        <Link className='p-4 shadow-xl relative mx-2 bg-red-500 rounded-full' to='/'>
                            <span style={{top:'-2px', right: '-5px'}} className='text-xs shadow-xl py-1 px-2 rounded-full absolute bg-amber-400 '>2</span>
                            <FaShoppingBag style={{color: 'white', fontSize: '1.4em'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;