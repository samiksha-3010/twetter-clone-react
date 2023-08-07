// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//     const[userData, setUserData]  = useState ({name: "", email: "",password: ""})
//     const router = useNavigate();
//     // console.log(userData,"userData")

//     const handleChange = (event) =>{
//         setUserData({...userData,[event.target.name]: event.target.value})
//     }
//       const handleSubmit = (event) =>{
//         event.preventDefault();
//         if(userData.name && userData.email && userData.password){
//             const usersArray = JSON.parse(localStorage.getItem("Users")) || []
//             usersArray.push(userData)
//             localStorage.setItem("Users",JSON.stringify( usersArray))
//             setUserData ({name: "", email: "",password: ""})
//             router('/login');
//             alert ("Registration Successfull")
//         }else{
//             alert ("please fill all field..")
//         }
//       }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <label>Name:</label><br/>
//         <input  value={userData.name} type='text' onChange={handleChange} name='name' /><br/>
//         <label>Email:</label><br/>
//         <input  value={userData.email} type='email' onChange={handleChange} name='email'/><br/>
//         <label>Password:</label><br/>
//         <input  value={userData.password} type='password' onChange={handleChange} name='password'/><br/>
//         <input type='submit' value= 'Register'/>
//         </form>


//     </div>
//   )
// }

// export default Register


// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Register = () => {
//   const [userData, setUserData] = useState({name: "", email: "", password: "" , role: "Buyer"})
//   const router= useNavigate();
//   console.log(userData,'userData')

//    const handleChange = (event) =>{
//     setUserData({...userData, [event.target.name]: event.target.value});
//    }
//     const handleSubmit = (event)=>{
//       event.preventDefault();
//       if(userData.name && userData.email && userData.password){
//         const  usersArray = JSON.parse(localStorage.getItem("Users")) || [];
//         usersArray.push (userData)
//         localStorage.setItem("Users",JSON.stringify( usersArray))
//         setUserData  ({name: "", email: "", password: "", role: "Buyer",cart: []})
//         router("/login")
//         alert("registrataion success")

//       } else{
//         alert("please fill all field")
//       }
//     }
//     function selectRole (event){
//     setUserData ({...userData,["role"]: event.target.value})
//     }

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Enter your Name*</label><br/>
//         <input  value={userData.name} type='text'  onChange={handleChange} name='name'/><br/>
//         <label>Select:Role</label><br/>
//         <select onClick={selectRole}>
//           <option value= 'Seller' >Seller</option>
//           <option value= 'Buyer'>Buyer</option>

          
//           </select><br/>

//         <label>Enter Your Email*</label><br/>
//         <input  value={userData.email} type='email'  onChange={handleChange} name='email'/><br/>
//         <label>Enter Your Password*</label><br/>
//         <input  value={userData.password} type='password'  onChange={handleChange} name='password'/><br/>
//         <input type='submit' value='Register'/><br/>

//       </form>
//     </div>
//   )
// }

// export default Register


  //  **************************self practice************************

   import React, { useState } from 'react'
   import { useNavigate } from 'react-router-dom'
   
   const Register = () => {
    const [userData,setUserData] = useState ({name: "",email: "",password: "",role: "Buyer" })
    const router = useNavigate();

    const  handleChange = (event) =>{
      setUserData({...userData,[event.target.name]: event.target.value})
    }
    const handleSubmit =(event) =>{
      event.preventDefault();
      if(userData.name && userData.email && userData.password){
        const userArray  = JSON.parse(localStorage.getItem("Users")) || []
         const userDataObj = {
          name:userData.name,
          email:userData.email,
          password:userData.password,
          role:userData.role,
          cart:[]
         };
       
       userArray.push(userDataObj)
       localStorage.setItem("Users",JSON.stringify)(userArray);
       setUserData({ name: "", email: "", password: "", role: "Buyer" ,cart: []});
       router("/login")
               alert("registrataion success")
      
      }else{
       alert ("please fill all field")
      }
    
    }
    function SelectRole (event){
      setUserData({...userData,["role"]: event.target.value})
    }

    

    

     return (
       <div>
        <h2>Registerd Here</h2>
        <form onSubmit={handleSubmit}>
           <label>Enter Your Name*</label><br/>
           <input value={userData.name} type='text' onChange={handleChange} name='name'/><br/>
           <label > Select:Role</label><br/>
           <select onChange={SelectRole}>
           <option  value='Seller'>Seller</option>
           <option value='Buyer'> Buyer</option>
           </select><br/>

           <label>Enter Your Email*</label><br/>
           <input value={userData.email} type='email' onChange={handleChange} name='email'/><br/>
           <label>Enter Your Password*</label><br/>
           <input value={userData.password} type='password' onChange={handleChange} name='password'/><br/>
          
           <input type='submit'value= 'Register'/><br/>
        </form>

       </div>
     )
   }
   
   export default Register