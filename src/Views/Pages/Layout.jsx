import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Main/Footer';
import Header from './Main/Header';
import Main from './Main/Main';

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                    <Main />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Layout;