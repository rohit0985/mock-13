const jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/user.model");


const authenticate = (req, res, next)=>{
    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
        var decoded = jwt.verify(token, 'secret');
      if(decoded){
        const userId = decoded.userId
        const user = UserModel.findById({_id:userId})
        if(!user.email?.includes("@masaischool.com")){
          req.body.userId = userId
        }
        next()
      }else{
        res.send({"err":"Please Login again"})
      }
    }else{
        res.send({"err":"Please Login again"})
    }
}

module.exports = {authenticate}