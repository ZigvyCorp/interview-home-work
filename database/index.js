// -----------------------------Use mongoose---------------------------------//
import mongoose from 'mongoose';

const account = "trinvm1210";
const encodedPassword = encodeURIComponent("Tri@12109898");
const url = `mongodb+srv://${account}:${encodedPassword}@web72.ss2kzgw.mongodb.net/BLOG`;

async function connectToDB() {
    try {
        const connect = await mongoose.connect(url)
        console.log(`Connect successfuly DB mongoose`)
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;

// ----------------------------Use mongodb-------------------------------------------------- //
// import { MongoClient } from 'mongodb';

// const account = "trinvm1210";
// const encodedPassword = encodeURIComponent("Tri@12109898");
// const url = `mongodb+srv://${account}:${encodedPassword}@web72.ss2kzgw.mongodb.net/`;

// export const client = new MongoClient(url);

// async function connectToDB() {
//     try {
//         await client.connect();
//         console.log('Connect successfully to database MongoDB');
//     } catch (error) {
//         console.log(error)
//     }
// }

// const dbname = "Web72";
// const collectionUsers = "Users";
// const collectionRoles = "Roles";
// export const databaseFunction = () => {
//     return client.db(dbname).collection(collectionUsers);
// }
// export const databaseRoles = () => {
//     return client.db(dbname).collection(collectionRoles);
// }

// export default connectToDB;