import UserSchema from "../schemas/user.js"
import jwt from "jsonwebtoken";
import "dotenv/config"

async function create(data){
    return await UserSchema.create(data);
}

async function findByEmail(email){
    const user = await UserSchema.findOne({email});
    return user;
}

async function gerenateToken(id) {
    return jwt.sign({id}, process.env.SECRET, {expiresIn: 86400});
    
}

async function findById(id){
    const user = await UserSchema.findById(id);
    return user;
}

export default {create, findByEmail, gerenateToken, findById};