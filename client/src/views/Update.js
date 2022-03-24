import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Redirect, useParams, useHistory} from 'react-router-dom';


const Update = () => {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(()=> {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)               
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.error(err))
        history.push('/')
    }



    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={updateProduct}>
                <p>
                    <label style={{marginRight: '10px'}}>Title</label>
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title"  />
                </p>
                <p>
                    <label style={{marginRight: '10px'}}>Price</label>
                    <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} name="price" />
                </p>
                <p>
                    <label style={{marginRight: '10px'}}>Description</label>
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}  name="description" />
                </p>
                <button>Update</button>                                
            </form>
        </div>
    )
}

export default Update;