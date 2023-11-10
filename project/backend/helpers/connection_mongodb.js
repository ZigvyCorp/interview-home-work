const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://huynhlaiphu2001:123@web.hbx7r.mongodb.net/BlogTest?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Ok Connected to mongose");
  } catch (error) {
    console.log(error);
  }
}


module.exports = {connect};

// const conn =mongoose.createConnection('mongodb://127.0.0.1:27017/temp',{
//     useNewUrlParser: true,
// useUnifiedTopology: true
// });

// conn.on('connected',function(){
//     console.log(`Mongodb: connected ${this.name}`)
// })

// conn.on('disconnected',function(){
//     console.log(`Mongodb: disconnected ${this.name}`)
// })

// conn.on('error',(error)=>{
//     console.log(`Mongodb: error ${JSON.stringify(error)}`)
// })

// process.on('SIGINT',async()=>{
//     await conn.close();
//     process.exit(0);
// })
