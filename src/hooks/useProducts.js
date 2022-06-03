import { useState } from "react"
const axios = require('axios').default

const useProducts = () => {
    const [products, setProducts] = useState([])

    axios.get('product.json')
    .then(res => setProducts(res))
    .catch(err => console.log(err))

    return {
        products,
    }
}
export default useProducts