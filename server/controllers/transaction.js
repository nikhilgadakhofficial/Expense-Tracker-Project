import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

const postTransaction = async (req , res)=>{

 const { title , amount,category,type,user} = req.body;

try {
    
 const newTransaction = await Transaction.create({
    title,
    amount,
    type,
    category,
    user
 });

 res.json({
    success : true,
    message : "Transaction Added  Successful",
    data : newTransaction
})

} catch (error) {
    res.json({
        success : false,
        message :error.message,
        data : null
    })
}
}

const getTransction = async (req , res)=>{
   const {userId} = req.query;

   const found = await User.findById(userId);

   if (!found) {
    return res.json({
        success : false,
        message : "User Not Found",
        data : null
    });
   }

   const transaction = await Transaction.find({user : userId});

   res.json({
    success : true,
    message : "transaction fetched Successfully",
    data : transaction
   })
}

export {
    postTransaction,
    getTransction
}