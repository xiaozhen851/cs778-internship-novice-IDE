import { StatusCodes } from "http-status-codes"
import CustomAPIError from "./CustomAPIError.js"

class BadRequestAPIError extends CustomAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.BAD_REQUEST
    }
}

export default BadRequestAPIError