import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

function signup(body) {
  const hasPassword = bcrypt.hashSync(body.password, 10);

 return authRepository.create({...body, password: hasPassword})
}

export default {
  signup,
};
