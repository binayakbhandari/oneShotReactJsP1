import axios from "axios"
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"

function Home() {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        const response = await axios.get('https://66dc946947d749b72acbfa21.mockapi.io/products')
        if (response.status === 200) {
            setProducts(response.data)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex space-x-5 mt-4 ml-2 flex-wrap">
                {
                    products.map((product) => {
                        return (
                            <Card product={product} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home