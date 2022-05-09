import React, { useEffect, useState } from 'react'
import { getProducts, currency } from './Products'


const HomeContent = () => {

    const [products, setProducts] = useState([]);

useEffect(()=>{
    getProducts().then(setProducts)
},[])
    return (
        <div className='my-10 grid grid-cols-4 gap-5'>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} />
                    </div>
                ))
            }
        </div>
    )
}

export default HomeContent