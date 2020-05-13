const mongoose = require("mongoose");
const userDesign = require("./dbSchemaDesign/userDesign");
const postDesign = require("./dbSchemaDesign/postDesign");

const db = process.env.DB_HOST || "mongodb://localhost:27017/";
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema(userDesign);
const UserModel = mongoose.model("users", userSchema);

const postSchema = new mongoose.Schema(postDesign);
const PostModel = mongoose.model("posts", postSchema);

module.exports = { UserModel, PostModel };
