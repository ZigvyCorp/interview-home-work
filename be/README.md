## Setup Database (MongoDB)

docker run -d -p 27017:27017 --name=mongodb mongo:latest

## How to run

- Install all dependencies `npm install` or `npm i`
- Make a `.env` file from `example.env`
- Call API /migration/user to make a data user
- Call API /migration/post to make a data post
- Call API /migration/comment to make a data comment
- OR Call API /migration/data to make a all data
- Run `npm run dev` to start application
