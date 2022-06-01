import React from 'react';
import Delivery from './Delivery';
import FabouriteMenu from './Fabourite Menu/FabouriteMenu';
import Hero from './Hero';
import Reviews from './Reviews';
import SpecialOffer from './SpecialOffer';

const Home = () => {
    return (
        <div>
            <Hero />
            <SpecialOffer />
            <FabouriteMenu />
            <Delivery />
            <Reviews />
        </div>
    );
};

export default Home;