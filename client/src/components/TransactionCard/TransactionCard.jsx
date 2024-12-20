import React from 'react'
import './TransactionCard.css'
import ImgDele from './delete.png'
import axios from 'axios'
import toast from "react-hot-toast";

function TransactionCard({_id,amount,category,title,type,createdAt,loadtransaction}) {

  const deleteTransactions = async ()=>{
    const response = await axios.delete(`http://localhost:8081/transactions/${_id}`);
    toast.success(response.data.message);
    loadtransaction()
  }
  return (
    <>
    <div className='container-card'>
     <h1 className='card-title'>{title}</h1>
     <p className='card-category'>{category}</p>
     <h4 className='card-type' style={{color : type == "credit" ? "green" : "red"}} >{type == "credit" ? "+" : "-"}{amount}</h4>
     <h5 className='card-date'>{new Date(createdAt).toLocaleString()}</h5>
     <img 
        onClick={deleteTransactions}
     className='img-dele' src={ImgDele}/>
    </div>
    </>
  )
}

export default TransactionCard