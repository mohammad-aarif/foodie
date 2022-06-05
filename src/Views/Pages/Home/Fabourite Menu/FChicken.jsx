import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../../Components/Products/Product';
import ProductSkeleton from '../../../Components/Products/ProductSkeleton';

const FChicken = () => {
    const {productsByCatagory : products, productLoading} = useProducts('chicken')
    return (
        <div className='grid gap-4 grid-cols-3'>
            {
                productLoading
                ? [...Array(6)].map((x, index) => <ProductSkeleton key={index}/>)
                :products.map(data => <Product key={data._id} product= {data}/>)
            }
        </div>
    );
};

export default FChicken;