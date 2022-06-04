import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../../Components/Product';
import ProductSkeleton from '../../../Components/ProductSkeleton';

const FCombo = () => {
    const {productsByCatagory: products, productLoading} = useProducts('combo')
    return (
        <div className='grid gap-4 grid-cols-3'>
            {
                productLoading
                ? [...Array(6)].map(data => <ProductSkeleton />)
                :products.map(data => <Product key={data._id} product= {data}/>)
            }
        </div>
    );
};

export default FCombo;