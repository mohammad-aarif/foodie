import { Skeleton } from '@mui/material';
import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className='product uppercase bg-white rounded-lg hover:shadow-md px-10 py-14'>
            <Skeleton animation='wave' variant="rectangular" sx={{width: '100%', height: '300px', }}/>
            <Skeleton animation='wave' variant="text" />
            <Skeleton animation='wave' variant="text" />
        </div>
    );
};

export default ProductSkeleton;