import jwt from "jsonwebtoken";
import { Auth } from "../repos/auth.js";

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      "super secret key",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await Auth.findUserById(decodedToken.id);
          if (user) res.json({ status: true, user: user[0].id });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
