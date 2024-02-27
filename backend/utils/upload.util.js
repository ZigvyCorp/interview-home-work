const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Thiết lập cấu hình cho multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadDir;
    if (req.baseUrl === "/api/v1/products") {
      uploadDir = path.join("public", "uploads", "products");
    } else if (req.baseUrl === "/api/v1/categories") {
      uploadDir = path.join("public", "uploads", "categories");
    } else if (req.baseUrl === "/api/v1/brands") {
      uploadDir = path.join("public", "uploads", "brands");
    } else if (req.baseUrl === "/api/v1/products") {
      uploadDir = path.join("public", "uploads", "products");
    } else if (req.baseUrl === "/api/v1/users/avatar") {
      uploadDir = path.join("public", "uploads", "avatars");
    } else if (req.baseUrl === "/api/v1/configs") {
      uploadDir = path.join("public", "uploads", "configs");
    } else {
      uploadDir = path.join("public", "uploads");
    }

    // Kiểm tra nếu thư mục không tồn tại, tạo mới
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    let fileName = file.originalname;
    let lastDotIndex = fileName.lastIndexOf(".");

    // Đuôi file
    let fileExtension = fileName.substring(lastDotIndex + 1);

    // Tên file
    let name = fileName.substring(0, lastDotIndex);

    const uniqueFileName = `${name}_${Date.now()}${Math.random()
      .toString(36)
      .substring(7)}.${fileExtension}`;
    cb(null, uniqueFileName);
  },
});
const upload = multer({ storage });

module.exports = { upload };
