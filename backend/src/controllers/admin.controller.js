import bcrypt from "bcrypt";
import { supabase } from "../config/supabase.js";
import { logAction } from "../utils/logger.js";

export const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await supabase.from("admins").insert({
    username,
    password_hash: hash
  });

  await logAction(req.admin.adminId, "CREATE_ADMIN");
  res.json({ success: true });
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  if (id === req.admin.adminId) {
    return res.status(400).json({ error: "자기 자신은 삭제 불가" });
  }

  await supabase.from("admins").delete().eq("id", id);
  await logAction(req.admin.adminId, "DELETE_ADMIN");

  res.json({ success: true });
};

export const listAdmins = async (req, res) => {
  const { data } = await supabase
    .from("admins")
    .select("id, username, created_at");

  res.json(data);
};
