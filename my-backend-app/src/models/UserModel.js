const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Tên người dùng, yêu cầu duy nhất
  password: { type: String, required: true }, // Mật khẩu
  name: { type: String, required: true }, // Tên đầy đủ
  dob: { type: Date, required: true }, // Ngày sinh
  created_at: { type: Date, default: Date.now }, // Thời gian tạo, mặc định là thời gian hiện tại
});

UserSchema.pre("save", function (next) {
  if (typeof this.dob === "string") {
    this.dob = new Date(this.dob.split("/").reverse().join("-")); // Chuyển đổi định dạng dd/mm/yyyy sang yyyy-mm-dd
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
