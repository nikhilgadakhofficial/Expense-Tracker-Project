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

    if (response.data.success) {
      
      toast.success(response.data.message)

      localStorage.setItem('currentUser',JSON.stringify(response.data.data));
    
      toast.loading('Loading To Home Page...');

      setTimeout(()=>{
        window.location.href = '/'
      },3000)
      

    } else {
      toast.error(response.data.message);
    }
    
    setEmail('');
    setPassword('');

  }
  return (
    <>
     <div className="container">
      
      <div className="login form">
        
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
  
  
            <input type="button" onClick={login} className="button" value="Login"/>
  
          </form>
  
          <div className="signup">
  
            <span className="signup">Don't have an account?
             <Link to="/signup"><label for="check">Signup</label></Link>
  
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login