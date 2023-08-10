// import React, { useContext, useState } from 'react'
// import { router, useNavigate } from 'react-router-dom'
// import { AuthContext } from './Context/AuthContext';

// const Login = () => {
//   const {state,Login} = useContext (AuthContext)
//   const [userData,setUserData] = useState({email: "",password: ""})
//   const router = useNavigate ();

//   const handleChange= (event) =>{
//     setUserData ({...userData,[event.target.name]: event.target.value})
//   }
//   const handleSubmit = (event) =>{
//     event.preventDefault();
// if(userData.email && userData.password){
//   var flag = false;
//   const allUsers = JSON.parse(localStorage.getItem("Users"))
//  for(var i = 0; i< allUsers.length;i ++ ){
//   if( allUsers[i].email == userData.email && allUsers[i].password == userData.password){
//     localStorage.setItem("Current-user", JSON.stringify(allUsers[i]))
//     Login(allUsers[i])
//     setUserData ({email: "",password: ""})
//     alert("Login success")
//     router("/")
//     flag=true
//     break;
//   }
//  }
//  if( flag == false){
//   alert ("please check email and password")
//  }


// }else{
//   alert ("please fill the all field ")
// }
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Enter your Email</label><br/>
//         <input  value={userData.email}  type='email' onChange={handleChange} name='email'/><br/>
//         <label>Enter your Password</label><br/>
//         <input value={userData.password}  type='password' onChange={handleChange}  name='password'/><br/>
     
//         <input type='submit' value='Login'/><br/>
//       </form>

//       <p  onClick={() => router ("register")} style={{color: "red"}}>New Register Here?</p>
//     </div>
//   )
// }

// export default Login



import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login