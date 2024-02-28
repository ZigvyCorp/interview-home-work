# Build a Blogging Page With ReactJS, NodeJS (2024)

This is a repository for a Build Blogging Page WIth ReactJS, NodeJS.

[VIDEO DEMO](https://youtu.be/3ogH-a1JuwE)

## Prerequisites

- **Node version 18.x**
- **Please run Server(Backend source) after run Client(Frontend source)**
- **Port of Server: 3000**
- **Port of Client: 3001**

### Install packages

```shell
npm i
```

### Tech Stack Frontend

```js
Ant
design
fortawesome
Redux - Redux
Toolkit
Axios
i18next
moment
React - Hook - Form
yup
```

### Tech Stack Backend

```js
express
mysql2
sequelize
bcryptjs
zod
swagger
```

### Setup .env file in src Client

```js
VITE_API_KEY = 'http://localhost:3000/api'
VITE_PORT = 3000
```

### Setup .env file in src Server

```json
In config folder => development:
- username: your MySQL username
- password: your MySQL password
- database: I init default is zigvy, you can change it.
- host: your MySQL host is 127.0.0.1 or localhost

```

### Connect to MySQL

```shell
Set up MySQL Workbench
Create MySQL connection name is zigvy
dbname: zigvy 
Hostname: 127.0.0.1 or localhost
Port: 3306
Username: root or you_username
Password: 123456 or your_password

if you have another password or another username
please config file in config.json

Example:
{
  "development": {
    "username": "root",
    "password": "123456",
    "database": "zigvy",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Generate Prisma and push DB

```shell
npx sequelize-cli db:migrate 
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
|:--------|:-----------------------------------------|
| `dev`   | Starts a development instance of the app |
