import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";

export const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "로그인 필요" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded; // { adminId }
    next();
  } catch {
    return res.status(401).json({ error: "토큰 만료" });
  }
};
