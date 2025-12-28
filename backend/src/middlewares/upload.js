import multer from "multer";

export const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    if (file.originalname.endsWith(".txt")) {
      cb(null, true);
    } else {
      cb(new Error("허용되지 않은 확장자"));
    }
  }
});
