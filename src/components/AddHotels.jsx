import React from 'react'
import './AddHotels.css'
import { useState } from 'react'
import axios from 'axios'

const baseurl = "https://hotel-booking-sage.vercel.app"

const AddHotels = () => {

  const [values,setValues] = useState({
    name:"",
    type:"",
    city:"",
    address:"",
    thumbnail:""
  })

  const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  const addHotels = async(productData) =>{
    try{
      const response = await axios.post(`${baseurl}/hotels`, productData)
      console.log(response.data)
    }catch(err){
      console.log(err)
  }
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    addHotels(values)
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div>
        <label>name</label>
        <input id='name' name='name' type="text" value={values.name} onChange={handleChange} />
      </div>
      <div>
        <label>Type</label>
        <input id='type' name='type' type="text" value={values.type} onChange={handleChange} />
      </div>
      <div>
        <label>city</label>
        <input id='city' name='city' type="text" value={values.city} onChange={handleChange} />
      </div>
      <div>
        <label>address</label>
        <input id='address' name='address' type="text" value={values.address} onChange={handleChange} />
      </div>
      <div>
        <label>Thumbnail</label>
        <input id='thumbnail' name='thumbnail' type="text" value={values.thumbnail} onChange={handleChange} />
      </div>
      <button type='submit'>Add</button>
    </form>
    </div>
  )
}

export default AddHotels
