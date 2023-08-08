import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
    const [productData,setProductData] = useState ({name: "",price: "",image: "",Cetegries: "Others" })
     const  router = useNavigate();

    const handleChange = (event) =>{
        setProductData({...productData,[event.target.name]: event.target.value})  
    }
    const handleSubmit = (event) =>{
   event.preventDefault();
   if(productData.name && productData.price && productData.image && productData.Cetegries){
    const productArray = JSON.parse(localStorage.getItem("Products")) || []
     const randomId = uuidv4
     productData ["id"] = randomId
    productArray.push(productData)
    localStorage.setItem("Products", JSON.stringify(productArray))
    setProductData ({name: "",price: "",image: "",Cetegries: "Others" })
    router("all-product")
    alert ("Product added success")

   }else{
    alert("please fill all field")
   }
    }
    function selectRole (event) {
        console.log(event.target.value, "-role")
        setProductData({...productData,["Cetegries"]: event.target.value })
    }
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("Currrent-user"))
        if(user){
            if(user?.role == "Buyer"){
                alert("you are not a seller")
                router('/')
            }
        }else{
            alert("you are not a logged user")
            router('/login')
        }
    },[])

  return (
    <div>
        <h2>AddProduct</h2>
        <form onSubmit={handleSubmit}>
            <lable> Product Name :</lable><br/>
            <input   value={productData.name} type='text' onChange={handleChange} name='name'/><br/>
            <lable> Product Price :</lable><br/>
            <input  value={productData.price} type='number' onChange={handleChange} name='price'/><br/>
            <label> Product Cetegries :</label><br/>
            <select  onChange={selectRole}>
                <option  value="Others">Others</option>
                <option value="Womens">Womens</option>
                <option value="Children">Children</option>
                <option value="Electronic">Electronic</option>
                <option value="Mens">Mens</option>

            </select><br/>
            <lable> Product Image :</lable><br/>
            <input  value={productData.image} type='text' onChange={handleChange} name='image' /><br/>
            <input type='submit' value='Add Product' /><br/>

        </form>
    </div>
  )
}

export default AddProduct