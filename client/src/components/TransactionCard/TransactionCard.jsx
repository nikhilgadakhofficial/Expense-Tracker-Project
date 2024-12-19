import React from 'react'
import './TransactionCard.css'
function TransactionCard({_id,amount,category,title,type,createdAt}) {
  return (
    <>
    <div className='container-card'>
     <h1>{title}</h1>
     <p>{category}</p>
     <h4 style={{color : type == "credit" ? "green" : "red"}} >{type == "credit" ? "+" : "-"}{amount}</h4>
     <h5>{new Date(createdAt).toLocaleString()}</h5>
    </div>
    </>
  )
}

export default TransactionCard