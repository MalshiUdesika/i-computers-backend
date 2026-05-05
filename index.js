import express from "express"
import mongoose from "mongoose"
import userRouter from "./router/userRouter.js"
import authorizeUser from "./lib/jwtMiddlewere.js"
import productRouter from "./router/productRouter.js"
import cors from 'cors'
import dotenv from 'dotenv'
import orderRouter from "./router/orderRouter.js"

dotenv.config()


const mongoURI = process.env.MONGO_URI

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


app.use(cors())

app.use(express.json())

app.use(authorizeUser)

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/oders", orderRouter)

function start(){
    console.log("Server started on port 3000")
}

app.listen(3000, start)