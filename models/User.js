import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
      },
      email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
          validator: validator.isEmail,
          message: 'Please provide a valid email',
        },
        unique: true,
      },
      password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false,
      },
      university:{
        type: String,
        trim: true,
        maxlength: 50,
        default: 'My university',
      }
})

UserSchema.pre("save", async function(){ // 在每次做保存操作之前加密user密码到db,这样db里面看到的密码就是加密过的
    // const salt = await bcrypt.genSalt(10)  //genSalt() 方法。此方法接受一个整数值，该值是确定散列密码所需时间的成本因素。成本因子越高，算法花费的时间越多，使用蛮力反转哈希就越困难。 
    // this.password = await bcrypt.hash(this.password, salt)
    // console.log(this.modifiedPaths())
    // console.log(this.isModified("password"))
    // console.log(this.isModified("lastName"))
    if(!this.isModified("password")){
      return
    }
    else{
      const salt = await bcrypt.genSalt(10)  //genSalt()
      this.password = await bcrypt.hash(this.password, salt)
    }
})

// UserSchema.methods.createJWT = function(){
//     return jwt.sign({userID : this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
// } //给每个user创造一个可以前后端沟通的token

UserSchema.methods.createJWT = function(){
    return jwt.sign({userID : this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
} //给每个user创造一个可以前后端沟通的token

UserSchema.methods.comparePassword = async function (candidatePassword) {
const isMatch = await bcrypt.compare(candidatePassword, this.password)
return isMatch
} //this.password是这个传入的password
// candidatePassword是db里面的password

export default mongoose.model("User",UserSchema)