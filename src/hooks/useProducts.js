import { useEffect } from "react"
import { useState } from "react"
const axios = require('axios').default

const useProducts = (params) => {
    const [productsByCatagory, setProductsByCatagory] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3002/products/${params}`)
        .then(res => setProductsByCatagory(res.data))
        .catch(err => console.log(err))
    }, [params])
    
    return {
        productsByCatagory,
    }
}
export default useProducts