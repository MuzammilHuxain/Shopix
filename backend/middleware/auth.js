import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


const authUser= async (req, res, next) => {
    const {token} = req.headers;
   
    console.log("Token: " + token);

    if(!token){
        return res.json({success: false, message: "Unauthorized Access"});
    }

    try {      
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
        
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export default authUser;