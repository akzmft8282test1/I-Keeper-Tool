import fs from "fs";
import { supabase } from "../config/supabase.js";

export const uploadFile = async (req, res) => {
  const file = req.file;
  const content = fs.readFileSync(file.path, "utf-8");

  const { data, error } = await supabase
    .from("uploaded_files")
    .insert({
      filename: file.originalname,
      original_content: content
    })
    .select()
    .single();

  fs.unlinkSync(file.path);

  if (error) return res.status(500).json(error);
  res.json(data);
};

export const getFiles = async (req, res) => {
  const { data, error } = await supabase
    .from("uploaded_files")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json(error);
  res.json(data);
};

export const modifyFile = async (req, res) => {
  const { id } = req.params;
  const { modified_content } = req.body;

  const { error } = await supabase
    .from("uploaded_files")
    .update({ modified_content })
    .eq("id", id);

  if (error) return res.status(500).json(error);
  res.json({ success: true });
};

export const downloadFile = async (req, res) => {
  const { id } = req.params;

  const { data } = await supabase
    .from("uploaded_files")
    .select("*")
    .eq("id", id)
    .single();

  res.setHeader(
    "Content-Disposition",
    `attachment; filename=modified_${data.filename}`
  );
  res.send(data.modified_content);
};
