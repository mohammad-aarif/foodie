import React from 'react';
import FabouriteMenu from './Fabourite Menu/FabouriteMenu';
import Hero from './Hero';
import SpecialOffer from './SpecialOffer';

const Home = () => {
    return (
        <div>
            <Hero />
            <SpecialOffer />
            <FabouriteMenu />
        </div>
    );
};

export default Home;