import User from "../models/User.js";

const postSignup = async (req,res)=>{
    
    const {fullName , email , password , dob } = req.body;

    try {
      const newUser = await User.create({
        "fullName" : fullName,
        "email" : email,
        "password" : password,
        "dob" : new Date(dob)
      })
    
      res.json({
        success : true,
        message : "Signup Successful",
        data : newUser
    })
     
    } catch (error) {
      
      res.json({
        success : false,
        message :error.message,
        data : null
    })
    }
}

const postLogin = async (req,res)=>{
  const {email,password} = req.body;

   try {
     
  const found = await User.findOne({email : email ,password : password})

  if (found) {
    res.json({
      success : true,
      message : "Login Successhul",
      data : found
    })
  }
  else{
    res.json({
      success : false,
      message : "Invalid Credentials",
      data : null
    })
  }
   } catch (error) {
    res.json({
      message: error.message,
      data: null,
    });
   }
    
}


export {
    postSignup,
    postLogin
}