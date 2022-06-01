import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../Home/Home';
import Products from '../Products/Products';
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/product' element={<Products/>} />
            </Routes>
        </main>
    );
};

export default Main;