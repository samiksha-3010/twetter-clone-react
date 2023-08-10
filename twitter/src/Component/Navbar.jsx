import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from'./Context/AuthContext'

const Navbar = () => {
  const router = useNavigate();
  const {state,Login,Logout} = useContext(AuthContext)
  const [user, setUser ] = useState  ({});

  useEffect(() =>{
    if(state?. user){
      setUser(state?. user)
    }else{
      setUser({})
    }
  },[state])
 

  return (
    <div  style={{width: "100%", height: "80px", border: "1px solid black", backgroundColor:"black", color:"white", display:"flex",justifyContent: "space-around"}}>
     
      <h2 onClick={() => router ('/')}>Navbar</h2>
    <div>
      {user?.email?  
      <>
    <h2  onClick={()=>router ('/addproduct')}>AddProduct</h2>
    <h2>All Product</h2>
    <h2>Cart</h2>
    <h2>Logout</h2>
    </>
    :
    <h2  onClick={() => router ('/register')}>Login</h2>
  }
    </div>
    </div>
      
   
  )
}

export default Navbar