import { StatusCodes } from "http-status-codes"

const errorHandleMiddleware = (err,req,res,next) =>{
    console.log(err.message)
    const defaultError = {
        StatusCodes: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg : err.message || "Something went wrong, try again later!"
    }
    if(err.name === "ValidationError"){
        defaultError.StatusCodes = StatusCodes.BAD_REQUEST
        defaultError.msg = Object.values(err.errors)
        .map((item)=>item.message)
        .join(",")
    }
    if(err && err.code === 11000){
        defaultError.StatusCodes = StatusCodes.BAD_REQUEST
        defaultError.msg = `${Object.keys(err.keyValue)} should be unique`
    }

    // res.status(defaultError.StatusCodes).send({msg:defaultError.msg})
    res.status(defaultError.StatusCodes).send({msg:defaultError.msg})

}

export default errorHandleMiddleware