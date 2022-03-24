import React, { useState, useEffect } from "react";
import axios from 'axios';

export default() => {
    // create states to store product data    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    // what happens when I submit the form (create new product)
    const handleSubmit = (e) => {
        // to prevent onsubmit default
        e.preventDefault();


        //Post reauest to server to create new product and store it in the DB
        axios.post('http://localhost:8000/api/product/new',{
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))

        setTitle("")
        setPrice("")
        setDescription("")  // clear states and inputs after submission
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label style={{marginRight: '10px'}}>Title</label>
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}  />
                </p>
                <p>
                    <label style={{marginRight: '10px'}}>Price</label>
                    <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price}  />
                </p>
                <p>
                    <label style={{marginRight: '10px'}}>Description</label>
                    <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}  />
                </p>
                <button>Create</button>                
            </form>
        </div>
        
    )

}