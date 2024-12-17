import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import  axios from 'axios'
import toast from 'react-hot-toast';

function Signup() {

  const [fullName,SetFullName] = useState('');
  const [email,setEmali] = useState('');
  const [password,setPassword] = useState('');
  const [dob,setDob]= useState('');

  const signup = async ()=>{

    const response = await axios.post("http://localhost:8081/signup",
      {
        fullName : fullName,
        email : email,
        password : password,
        dob : dob
      }
    );
    console.log(response);

    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }

    SetFullName('');
    setPassword('');
    setDob('');
    setEmali('');

    
  }
  return (
    <>
    <div className="container">
    <div className="registration form">
      <header>Signup</header>
      <form>

        <input type="text" 
        placeholder="Enter your Full Name "
        value={fullName}
        onChange={(e)=>{SetFullName(e.target.value)}}/>

        <input type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e)=>{setEmali(e.target.value)}}/>

        <input type="password" 
        placeholder="Create a password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>

       
        <input type="date"
        value={dob}
        onChange={(e)=>{setDob(e.target.value)}}/>

        <input type="button"
         className="button"
         value="Signup"
          onClick={signup}/>

      </form>
      <div className="signup">
        <span >Already have an account?
        <Link to="/login">  <label >Login</label></Link>
        </span>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup