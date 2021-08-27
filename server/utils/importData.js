const userService = require("./../services/user")
const postService = require("./../services/post");
const cmtService = require("./../services/comment");
const mongoose = require("mongoose")
const fs = require('fs')
const mongo = require("./../db/mongo");
mongo.connectMongo();
const data = fs.readFileSync("user.json");
const docs = JSON.parse(data.toString());

const postData = fs.readFileSync("post.json");
const postDocs = JSON.parse(postData.toString());


const cmtData = fs.readFileSync("cmt.json");
const cmtDocs = JSON.parse(cmtData.toString());

async function importUser(){
    for(let i =0; i < docs.length; i++){
      // console.log(i);
        let doc = userService.createModel({
          _id: docs[i]._id,
          name: docs[i].name,
          username: docs[i].username,
          password: docs[i].password,
          dob: docs[i].dob,
          created_at: docs[i].created_at,
        });
        await userService.insert(doc);
    }
    for (let i = 0; i < postDocs.length; i++) {
      let doc = postService.createModel({
        _id: postDocs[i]._id,
        owner: postDocs[i].owner,
        title: postDocs[i].title,
        content: postDocs[i].content,
        tags: postDocs[i].tags,
        created_at: postDocs[i].created_at,
      });
      await postService.insert(doc);
    }
    for (let i = 0; i < cmtDocs.length; i++) {
      let doc = cmtService.createModel({
        _id: cmtDocs[i]._id,
        owner: cmtDocs[i].owner,
        post: cmtDocs[i].post,
        content: cmtDocs[i].content,
        created_at: cmtDocs[i].created_at,
      });
      await cmtService.insert(doc);
    }
    mongoose.connection.close();
}

importUser()

