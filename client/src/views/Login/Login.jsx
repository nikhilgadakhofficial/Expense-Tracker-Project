import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  axios from 'axios'
import toast from 'react-hot-toast';


function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const login = async () =>{

    const response = await axios.post("http://localhost:8081/login",
      {
        email : email,
        password : password
      }
    );

    console.log(response);

    if (response.data.message) {
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
    
    setEmail('');
    setPassword('');

  }
  return (
    <>
     <div class="container">
      
      <div class="login form">
        
          <header>Login</header>
          <form >
            <input type="text"
             placeholder="Enter your email"
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}/>
  
            <input type="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
  
  
            <input type="button" onClick={login} class="button" value="Login"/>
  
          </form>
  
          <div class="signup">
  
            <span class="signup">Don't have an account?
             <Link to="/signup"><label for="check">Signup</label></Link>
  
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login