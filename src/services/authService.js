import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function signup(body) {
  const hasPassword = bcrypt.hashSync(body.password, 10);
  const userExist = await authRepository.findByEmail(body.email)
  if(userExist) throw new Error('User already exist!');

 return await authRepository.create({...body, password: hasPassword})
}

export default {
  signup,
};
