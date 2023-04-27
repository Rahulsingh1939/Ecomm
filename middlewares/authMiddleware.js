import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    // console.log(token);
    // if (!token) {
    //     return res.status(401).send({
    //         success: false,
    //         message: "Token is Required",
    //     }); 
    // }
    // try {
    //     const decode = await JWT.verify(token, process.env.JWT_SECRET);
    //     req.user = decode;
    //     next();
    // } catch (error) {
    //     console.log(error);
    //     res.status(401).send({
    //         success: false,
    //         message: "Invalid Token",
    //         error,
    //     });
    // }

  try {
    // console.log(req.headers.authorization);
    // console.log(process.env.JWT_SECRET);
    const decode = JWT.verify(
      token,
        process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
