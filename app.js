const express=require("express")
const app=express()
const cors=require("cors")
const userRoute=require("./routes/signUpRoute")
require("./models/usersTable")
const db=require("./utils/db-connection")

app.use(express.static("public"))
app.use(express.json())
app.use(cors())
app.use("/user",userRoute)

db.sync({force:false}).then(()=>{
 app.listen(3000,()=>{
   console.log("SErver is running")
})
}).catch(error => console.error(error));
