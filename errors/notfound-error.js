import { StatusCodes } from "http-status-codes"
import CustomAPIError from "./CustomAPIError.js"

class NotFoundError extends CustomAPIError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.NOT_FOUND
    }
}

export default NotFoundError