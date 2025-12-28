import { supabase } from "../config/supabase.js";

export const logAction = async (adminId, action, fileId = null) => {
  await supabase.from("action_logs").insert({
    admin_id: adminId,
    action,
    target_file_id: fileId
  });
};
