import React, { useState } from 'react';
import Product from '../../../Components/Product';
const axios = require('axios');

const FCombo = () => {
    const [products, setProducts] = useState([{}])

    axios.get('product.json')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
    return (
        <div className='grid gap-4 grid-cols-3'>
            {
               products.map(data => <Product product= {data}/>)
            }
        </div>
    );
};

export default FCombo;