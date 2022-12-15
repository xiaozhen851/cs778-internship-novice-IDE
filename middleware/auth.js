import jwt from "jsonwebtoken"
import UnauthenticatedError from "../errors/unauthencated-error.js"


const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer")) {

    throw new UnauthenticatedError("Authentication not valid")
  }
  const token = authHeader.split(" ")[1] //把authheader里面的数据通过空格分开取到第二个，因为格式是 Bearer空格token
  try {
    const payload = jwt.verify(token,process.env.JWT_SECRET)
    req.user = payload
    next()
  } catch (error) {
    throw new UnauthenticatedError("Authentication is not valid or expired")
  }


}

export default auth