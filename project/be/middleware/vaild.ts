import { Request, Response, NextFunction } from "express";

export const validRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  const errors = [];

  if (!name) {
    errors.push("Please add your name.");
  } 

  if (!email) {
    errors.push("Please add your email or phone number.");
  } else if (!validateEmail(email)) {
    errors.push("Email  format is incorrect.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 chars.");
  }

  if (errors.length > 0) return res.status(400).json({ msg: errors });

  next();
};



export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
