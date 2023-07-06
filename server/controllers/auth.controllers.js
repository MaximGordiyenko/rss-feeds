import jwt from "jsonwebtoken";
import { Auth } from "../repos/auth.js";

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "super secret key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };
  
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }
  
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }
  
  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }
  
  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  
  return errors;
};

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await Auth.insert({ email, password });
    const findUser = await Auth.findByEmail(email);
    const token = createToken(findUser[0].id);
    
    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });
    
    res.status(201).json({ user: findUser[0].id, created: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findUserByEmailPassword(email, password);
    const token = createToken(user[0].id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user[0].id, status: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
};
