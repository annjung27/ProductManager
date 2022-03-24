import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';



const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const history = useHistory();
    const { removeFromDom } = props

    // send get request to server to get one product by id. 
    // useEffect to make axios request only once when Display page opens.
    // [] at the end of useEffect to bring data only once when the page render. 
    useEffect(()=> {
        axios.get('http://localhost:8000/api/product/'+id)
            .then(res=> {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    // Delete product when click the delete button
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/'+ productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
            // redirect to main page after delete the product
            history.push("/")
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description:</p>
            <p>{product.description}</p>
            <Link to={"/"+ id + "/edit"}>Edit</Link>
            <button style={{marginLeft:"5px"}} onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default Detail;