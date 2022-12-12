import express from 'express'
import "express-async-errors"

console.log("server is running")

const app = express()
import dotenv from 'dotenv'
dotenv.config()
import notFoundMiddleware from './middleware/not-found.js'
import errorHandleMiddleware from './middleware/error-handler.js'
import connectionDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'


app.use(express.json())  //as we posting data so allow we pass json

app.get('/', (req, res) => {
    // throw new Error("error")
    res.send('Welcome!')
})

app.use("/api/version1/auth",authRouter)






//middleware

app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)



const port = process.env.PORT || 8000
// app.listen(port, () => console.log(`Server is listening on port ${port}...`))
const start = async() =>{
    try{
        await connectionDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}...`)
        })
    }catch(error){
        console.log(error)
    }
}


start()