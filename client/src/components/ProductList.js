import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom'

const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/'+ productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>All Products:</h2>
            {
                props.products.map((product, i)=>
                    <p key={product._id}>
                        <Link to={"/"+product._id}>{product.title}</Link>
                        <button style={{marginLeft:"5px"}} onClick={()=>{deleteProduct(product._id)}}>Delete</button>
                    </p>
                )
            }
        </div>
    )
}

export default ProductList;