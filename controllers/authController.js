import { StatusCodes } from "http-status-codes"
import BadRequestAPIError from "../errors/bad-request-error.js"
import UnauthenticatedError from "../errors/unauthencated-error.js"
import User from "../models/User.js"

const register = async(req,res) =>{
    const {name, email, password} = req.body
    if (!name || !email || !password){
        throw new BadRequestAPIError("please provide all values")
    }
    const userAlreadyExists = await User.findOne({email})
    if (userAlreadyExists){
        throw new BadRequestAPIError("We have this already!")
    }
    const user = await User.create(req.body)
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name, email:user.email, location:user.location, lastName:user.lastName},token,location: user.location})


}
const login = async(req,res) =>{
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestAPIError("Please fill up all the value")
    }
    const user = await User.findOne({email}).select("+password")
    if(!user){
        throw new UnauthenticatedError("Please register first!")
    }
    console.log(user)
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      throw new UnauthenticatedError('Password and Account does not match.')
    }
    else{
        const token = user.createJWT() //创建jwt token
        user.password = undefined //response中hidden password
        res.status(StatusCodes.OK).json({user, token, location: user.location})
        console.log({msg:`你好${user.name}`})
    }

    
}
const updateUser = async(req,res)=>{
    res.send("update user")
}

export {login, updateUser, register}