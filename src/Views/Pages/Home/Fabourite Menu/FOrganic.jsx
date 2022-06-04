import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../../Components/Product';

const FOrganic = () => {
    const {productsByCatagory : products} = useProducts('organic')
    return (
        <div className='grid gap-4 grid-cols-3'>
            {
               products.map(data => <Product key={data._id} product= {data}/>)
            }
        </div>
    );
};

export default FOrganic;