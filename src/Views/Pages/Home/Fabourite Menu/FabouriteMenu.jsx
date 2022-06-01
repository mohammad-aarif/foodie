import React from 'react';
import '../../../../css/fabouritemenu.css'
import comboIcon from '../../../../assets/images/combo_icon.png'
import burgerIcon from '../../../../assets/images/burger_icon.png'
import pizzaIcon from '../../../../assets/images/pizza_icon.png'
import organicIcon from '../../../../assets/images/organic_icon.png'
import chickenIcon from '../../../../assets/images/chicken_icon.png'
import FBurger from './FBurger';
import { Link, Route, Routes } from 'react-router-dom';
import FPizza from './FPizza';
import FCombo from './FCombo';
import FChicken from './FChicken';
import FOrganic from './FOrganic';

const FabouriteMenu = () => {
    return (
        <div className=''>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Fabourite Menu</h1>
                <p className="text-sm">Inspired by recipes and creations of world’s best chefs</p>
            </div>
            {/* Fabourite menu navigation  */}
            <div className="grid grid-cols-5 px-40 py-10 text-center">

                <Link to='fcombo' className="col-span-1 menu-icon">
                    <img src={comboIcon} alt="" />
                    <div className="font-light text-md uppercase">combo</div>
                </Link>
                
                <Link to='fpizza' className="col-span-1 menu-icon">
                    <img src={pizzaIcon} alt="" />
                    <div className="font-light text-md uppercase">Pizza</div>
                </Link>
                
                <Link to='fburger' className="col-span-1 menu-icon">
                    <img src={burgerIcon} alt="" />
                    <div className="font-light text-md uppercase">burger</div>
                </Link>
                
                <Link to='fchicken' className="col-span-1 menu-icon">
                    <img src={chickenIcon} alt="" />
                    <div className="font-light text-md uppercase">chicken</div>
                </Link>
                
                <Link to='forganic' className="col-span-1 menu-icon">
                    <img src={organicIcon} alt="" />
                    <div className="font-light text-md uppercase">Organic</div>
                </Link>
            </div>

            {/* Fabourite menu items  */}
            <div className="fabourite-menu px-32 py-20">
                <Routes>
                    <Route path='/' element={<FCombo/>}/>
                    <Route path='fcombo' element={<FCombo/>}/>
                    <Route path='fpizza' element={<FPizza/>}/>
                    <Route path='fburger' element={<FBurger/>}/>
                    <Route path='fchicken' element={<FChicken/>}/>
                    <Route path='forganic' element={<FOrganic/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default FabouriteMenu;