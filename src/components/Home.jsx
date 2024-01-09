import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
    const [products,setproducts] = useState([]);
    const getproducts = async () =>{
        try{
            const response = await axios.get(`/hotels`)
            console.log(response.data)
           setproducts(response.data)
        }catch(err){
            console.log(err)
        }
    } 

    useEffect(()=>{
        getproducts()
    },[])
  return (
    <div className="container">
    {products.map((item) => (
      <div className="product-card" key={item._id}>
        <div className="product-image">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="product-details">
        <h2 className="product-title">{item.type}</h2>
          <h4 className="product-price">{item.city}</h4>
          <h2 className="product-title">{item.name}</h2>
          <h4 className="product-price">{item.address}</h4>
          <button className="add-to-cart-btn">Book Now</button>
        </div>
      </div>
    ))}
    <Link to="/add"><button>Add product</button></Link>
  </div>
  )
}

export default Home
