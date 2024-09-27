## BACKEND:
To run backend, navigate to the backend directory and run the following commands:
    -   npm install
    -   npm run dev
    **The backend will run on http://localhost:3001**
To migrate the database, run the following command:
    -   npm run db:seed
        -   This will seed the database with the data from MOCK EXTERNAL-API: https://jsonplaceholder.typicode.com/ to MongoDB Database.
    -   npm run db:rollback
        -   This will rollback the database to the initial state.

## FRONTEND:
To run frontend, navigate to the frontend directory and run the following commands:
    -   npm install
    -   npm start
    **The frontend will run on http://localhost:3000**

**Because this is a test project I don't have the .env file in the gitignore file.**
**Please create a mongoDB database with the following name: `interview-test`.**