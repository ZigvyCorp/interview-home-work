import app from "./app.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 4001;

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
