import React from 'react';

const ViewProduct = (props) => {
    const {id} = props
    return (
        <div className=' backdrop-blur-md backdrop-brightness-150 w-3/4 product-modal rounded-2xl p-10'>
            <h1 className='p-32'>{id}</h1>
        </div>
    );
};

export default ViewProduct;