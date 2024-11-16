## Run Backend

- Install the tool to run PostgreSQL (if not already installed).
- Create a database named `blog-zigvy`.
- Run the SQL script to create the tables located in the `api/src/db` folder.
- Navigate to the `api` directory.
- Create a `.env` file with the variables from the `.env.example` file.
  - **Note**: In the `.env` file, make sure to update the `DB_URL` variable with your local PostgreSQL connection details:
    ```
    DB_URL=postgresql://${username}:${password}@localhost:5432/blog-zigvy?schema=public
    ```
    Ensure that the database URL matches your local setup.
- Run the command: `yarn` or `npm install`.
- After installing the necessary libraries, run the command: `yarn start:dev`.
- After successfully running the backend, access `${BASE_URL}/v1/api/docs` to view the backend documentation.

## Run Frontend

- Navigate to the `client` directory.
- Create a `.env` file with the variables from the `.env.example` file.
- Run the command: `yarn` or `npm install`.
- After installing the necessary libraries, run the command: `yarn dev`.
