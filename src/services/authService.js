import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function signup(body) {
  const hasPassword = bcrypt.hashSync(body.password, 10);
  const userExist = await authRepository.findByEmail(body.email);
  if(userExist) throw new Error('User already exist!');

 return await authRepository.create({...body, password: hasPassword})
};

async function signin(body) {
  const userExist = await authRepository.findByEmail(body.email);
  if(!userExist) throw new Error('Email or password incorrect!');
  const passwordValid = bcrypt.compareSync(body.password, userExist.password);
  if(!passwordValid) throw new Error('Email or password incorrect!');

  

  return authRepository.gerenateToken(userExist._id);
  
}

async function userLogged(id) {
  const user = await authRepository.findById(id)
  if(!user) throw new Error('User not found');
  return user;  
}


export default {
  signup,
  signin,
  userLogged,
};
