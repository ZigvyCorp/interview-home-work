const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL_DATABASE);
  console.log("Connect Database Successfully")
}