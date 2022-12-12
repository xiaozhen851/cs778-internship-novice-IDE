import { StatusCodes } from "http-status-codes"
import BadRequestAPIError from "../errors/bad-request-error.js"
import User from "../models/User.js"

const register = async(req,res)=>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
        throw new BadRequestAPIError("Please provide all values")
    }
    const userAlreadyExists = await User.findOne({email})
    if (userAlreadyExists){
        throw new BadRequestAPIError("This email has been registered already!")
    }
    const user = await User.create(req.body)
    const token = user.createJWT()
    console.log(token)
    res.status(StatusCodes.OK).json({user:{name:user.name, email:user.email, university : user.university},token})

}
const login = async(req,res)=>{
    res.send("login user")
}
const updateUser = async(req,res)=>{
    res.send("update user")
}

export {login, updateUser, register}