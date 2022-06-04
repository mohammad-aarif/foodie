import { useEffect } from "react"
import { useState } from "react"
const axios = require('axios').default

const useProducts = (params) => {
    const [productsByCatagory, setProductsByCatagory] = useState([])
    const [productLoading, setProductLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3002/products/${params}`)
        .then(res => {
            setProductsByCatagory(res.data)
            setProductLoading(false)
        })
        .catch(err => console.log(err))
    }, [params])

    return {
        productsByCatagory,
        productLoading,
    }
}
export default useProducts