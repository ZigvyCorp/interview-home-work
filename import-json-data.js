const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const mongoose      = require('mongoose');

const pathConfig        = require('./path');
global.__base           = __dirname + '/';
global.__path_app       = __base + pathConfig.folder_app + '/';

global.__path_configs   = __path_app + pathConfig.folder_configs + '/';

const databaseConfig  = require(__path_configs + 'database');


mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.1r1zsfn.mongodb.net/${databaseConfig.database}`)

function fetchDataAndSave(apiUrl, jsonFile) {
  // Gửi yêu cầu API và lưu dữ liệu vào tệp JSON
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Tên tệp JSON
      const jsonFilePath = path.join(__path_app, '_data', jsonFile);
      console.log('jsonFilePath: ', jsonFilePath);

      // Tạo thư mục nếu nó không tồn tại
      if (!fs.existsSync(path.join(__path_app, '_data'))) {
        fs.mkdirSync(path.join(__path_app, '_data'));
      }

      // Ghi dữ liệu vào tệp JSON
      fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

      console.log(`Data saved to ${jsonFilePath}`);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Sử dụng hàm với tham số là apiUrl
const apiUrlComments = 'https://jsonplaceholder.typicode.com/comments';
const apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts';
const apiUrlUsers = 'https://jsonplaceholder.typicode.com/users';


fetchDataAndSave(apiUrlComments, 'comments-data.json');

fetchDataAndSave(apiUrlPosts, 'posts-data.json');

fetchDataAndSave(apiUrlUsers, 'users-data.json');

