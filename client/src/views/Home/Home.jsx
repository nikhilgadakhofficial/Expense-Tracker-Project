import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import ImgUser from './user.png'
import ImgAdd from './add.png'
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [netIncome,setNetIncome] = useState(0);
  const [netExpense,setNetExpense] = useState(0);

  const loadtransaction = async () => {
    if (!user._id) {
      return;
    }
    const response = await axios.get(
      `http://localhost:8081/transactions?userId=${user._id}`
    );
    toast.success(response.data.message);

    setTransaction(response.data.data);
    console.log(response.data.data);
  };

  useEffect(()=>{
  let income = 0;
  let expense = 0;

  transaction.forEach((transaction)=>{

    if (transaction.type === "credit") {
      income += parseInt(transaction.amount);
    }
    else{
      expense += parseInt(transaction.amount);
    }
  })

  setNetIncome(income);
  setNetExpense(expense)
  },[transaction])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    loadtransaction();
  }, [user]);

  console.log(transaction);
  return (
    <div>
      <div className="img-card">
      <img  onClick={() => {
          localStorage.clear();
          toast.success("Logout Successfully");

          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }} className="img" src={ImgUser} />
         <h6>Logout</h6>
       <Link to="/transactionAdd"><img className="img2" src={ImgAdd}/></Link>
      </div>
  
    

      <h1 style={{textAlign : "center"}}>!! Expense Tracker !! </h1>

      <div className="transaction-card">
        <div className="transaction-itams">
          <span className="transaction-amount">+{netIncome} </span>
          <span className="transaction-text">Net Income</span>
        </div>
        <div className="transaction-itams">
          <span className="transaction-amount">-{netExpense} </span>
          <span className="transaction-text">Net Expense </span>
        </div>
        <div className="transaction-itams">
          <span className="transaction-amount"> { netIncome - netExpense} </span>
          <span className="transaction-text">Net Balance</span>
        </div>
      </div>

   <div className="card-map">
   {
        transaction.map((transaction)=>{
          const {_id,amount,category,title,type,createdAt} =transaction;
          return(
            <TransactionCard
            _id={_id}
            amount={amount}
            category={category}
            title={title}
            type={type}
            createdAt={createdAt}
            loadtransaction={loadtransaction}
            />
          )
        })
      }
   </div>

    </div>
  );
}

export default Home;
