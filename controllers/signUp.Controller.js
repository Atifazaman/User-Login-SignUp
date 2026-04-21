const userTable=require("../models/usersTable")

const addUser=async(req,res)=>{
  try {
     const {name,email,password}=req.body
 const checkEmail=await userTable.findOne({where:{
    email
}})

if(checkEmail){
    return res.status(400).json({ message: "Email already exists" });
}
const newUser = await userTable.create({
            name,
            email,
            password
        });

        res.status(201).json({message: "User created successfully"});

  } catch (error) {
     res.status(500).json({ error: error.message });
  }  
}

const checkUser=async(req,res)=>{
  try {
     const {email,password}=req.body
 const user=await userTable.findOne({where:{
    email
}})

if(!user){
    return res.status(404).json({ message: "User does not exists" });
}
if (user.password === password) {
    return res.status(200).json({
        message: "Login successful",
    });
} else {
    return res.status(401).json({
        message: "User not authorized"
    });
}

  } catch (error) {
     res.status(500).json({ error: error.message });
  }  
}



module.exports={
    addUser,checkUser
}
