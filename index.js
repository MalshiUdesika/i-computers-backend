import express from "express"
import mongoose from "mongoose"
import userRouter from "./router/userRouter.js"
import authorizeUser from "./lib/jwtMiddlewere.js"
import productRouter from "./router/productRouter.js"

const mongoURI = "mongodb+srv://admin:1234@cluster0.sg7mskk.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected to mongoDB")
    }
).catch(
    ()=>{
        console.log("Error connecting to mongoDB")
    }
)

const app = express()

app.use(express.json())

//app.use(authorizeUser)

app.use("/users", userRouter)
app.use("/products", productRouter)

function start(){
    console.log("Server started on port 3000")
}

app.listen(3000, start)