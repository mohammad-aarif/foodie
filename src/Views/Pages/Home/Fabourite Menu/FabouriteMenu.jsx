import React from 'react';
import '../../../../css/fabouritemenu.css'
import comboIcon from '../../../../assets/images/combo_icon.png'
import burgerIcon from '../../../../assets/images/burger_icon.png'
import pizzaIcon from '../../../../assets/images/pizza_icon.png'
import organicIcon from '../../../../assets/images/organic_icon.png'
import chickenIcon from '../../../../assets/images/chicken_icon.png'
import { NavLink, Outlet} from 'react-router-dom';

const FabouriteMenu = () => {
    return (
        <div className=''>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Fabourite Menu</h1>
                <p className="text-sm">Inspired by recipes and creations of world’s best chefs</p>
            </div>
            {/* Fabourite menu navigation  */}
            <div className="grid grid-cols-5 px-40 py-10 text-center">

                <NavLink 
                to='fcombo' 
                className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
                    <img src={comboIcon} alt="" />
                    <div className="font-light text-md uppercase">combo</div>
                </NavLink>
                
                <NavLink 
                to='fpizza' 
                className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
                    <img src={pizzaIcon} alt="" />
                    <div className="font-light text-md uppercase">Pizza</div>
                </NavLink>
                
                <NavLink 
                to='fburger' 
                className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
                    <img src={burgerIcon} alt="" />
                    <div className="font-light text-md uppercase">burger</div>
                </NavLink>
                
                <NavLink 
                to='fchicken' 
                className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
                    <img src={chickenIcon} alt="" />
                    <div className="font-light text-md uppercase">chicken</div>
                </NavLink>
                
                <NavLink 
                to='forganic' 
                className={({isActive}) => isActive ? "menu-active col-span-1 menu-icon" : "col-span-1 menu-icon"}>
                    <img src={organicIcon} alt="" />
                    <div className="font-light text-md uppercase">Organic</div>
                </NavLink>
            </div>

            {/* Fabourite menu items  */}
            <div className="fabourite-menu px-32 py-20">
                <Outlet />
            </div>
        </div>
    );
};

export default FabouriteMenu;