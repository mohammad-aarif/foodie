import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../../Components/Product';

const FBurger = () => {
    const {productsByCatagory : products} = useProducts('burger')
    return (
        <div className='grid gap-4 grid-cols-3'>
            {
               products.map(data => <Product key={data._id} product= {data}/>)
            }
        </div>
    );
};

export default FBurger;