import { supabase } from "../config/supabase.js";

export const getLogs = async (req, res) => {
  const { data } = await supabase
    .from("action_logs")
    .select(`
      id,
      action,
      created_at,
      admins(username)
    `)
    .order("created_at", { ascending: false });

  res.json(data);
};
