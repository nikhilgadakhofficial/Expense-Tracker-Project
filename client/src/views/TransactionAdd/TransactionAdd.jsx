import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

function TransactionAdd() {
    const [user, setUser] = useState("");
    const [title,setTitle] = useState('');
    const [category,setCategory]  = useState('');
    const [amount,setAmount] = useState('');
    const [type,setType] = useState('credit');

    const addTransaction  = async ()=>{

      const response = await axios.post("http://localhost:8081/transaction",
        {
          title : title,
          category : category,
          amount : amount,
          type : type,
          user : user._id
        }
      );

   toast.success(response.data.message)

      setAmount('');
      setCategory('');
      setTitle('');
      setType('');
      
    }
  
    
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);
  return (
   <>
     <div className="container">
         
         <div className="login form">
           
             <header>Transaction Add </header>
             <form >  

               <input type="text"
                placeholder="Enter your Title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
               />

                 <input type="text"
                placeholder="Enter your category"
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
               />

                 <input type="number"
                placeholder="Enter your amount"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
               />

                 <input type="text"
                placeholder="Enter your type debit or credit"
                value={type}
                onChange={(e)=>{setType(e.target.value)}}
               />
     
     
     
               <input type="button" onClick={addTransaction} className="button" value="TransactionAdd"/>
     
             </form>
     
             <div className="signup">
     
               <span className="signup">
                <Link to="/"><label for="check">Home</label></Link>
     
               </span>
             </div>
           </div>
         </div>
   </>
  )
}

export default TransactionAdd