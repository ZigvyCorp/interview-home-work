const fs            = require('fs');
const mongoose      = require('mongoose');

const pathConfig        = require('./path');
global.__base           = __dirname + '/';
global.__path_app       = __base + pathConfig.folder_app + '/';

global.__path_configs   = __path_app + pathConfig.folder_configs + '/';

const databaseConfig  = require(__path_configs + 'database');


mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.1r1zsfn.mongodb.net/${databaseConfig.database}`)

const CommentsSchemas = require('./app/schemas/comments');
const PostSchemas = require('./app/schemas/posts');
const UsersSchemas = require('./app/schemas/users');

const Comments = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/comments-data.json`,'utf-8')
)

const Posts = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/posts-data.json`,'utf-8')
)

const Users = JSON.parse(
    fs.readFileSync(`${__dirname}/app/_data/users-data.json`,'utf-8')
)

const importData = async () => {
    try {
        await CommentsSchemas.create(Comments)
        await PostSchemas.create(Posts)
        await UsersSchemas.create(Users)
        console.log('importData...');
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

const deleteData = async () => {
    try {
        await CommentsSchemas.deleteMany({})
        await PostSchemas.deleteMany({})
        await UsersSchemas.deleteMany({})
        console.log('deleteData...');
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

if(process.argv[2] === '-i'){
    importData();
}else if(process.argv[2] === '-d'){
    deleteData();
}