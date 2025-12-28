import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supabase } from "../config/supabase.js";
import { JWT_SECRET } from "../config/jwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  const { data: admin } = await supabase
    .from("admins")
    .select("*")
    .eq("username", username)
    .single();

  if (!admin) {
    return res.status(401).json({ error: "존재하지 않는 관리자" });
  }

  const match = await bcrypt.compare(password, admin.password_hash);
  if (!match) {
    return res.status(401).json({ error: "비밀번호 오류" });
  }

  const token = jwt.sign(
    { adminId: admin.id },
    JWT_SECRET,
    { expiresIn: "8h" }
  );

  res.json({ token });
};
