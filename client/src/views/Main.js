import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import Detail from "./Detail";

export default() => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // send get request to server to get all products. 
    // useEffect to make axios request only once when Main page opens.
    // [] at the end of useEffect to bring data only once when the page render.
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res =>{
                console.log(res.data)
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, [])

    // remove the deleted item from the products state
    const removeFromDom = productId => {
        // update product state with the items that have not been deleted. (using .filter)
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            <ProductForm />
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}

        </div>
    )
}