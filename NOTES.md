# Set up

- Create .env files in 2 directories: ./frontend, ./backend
- Copy the content from ./frontend/.env.sample to ./frontend/.env
- Copy the content from ./backend/.env.sample to ./backend/.env
- Replace the value of MONGODB_URL in your ./backend/.env with any of your MongoDB connections
- Install dependencies:

```
cd ./frontend
```

```
npm i
```

```
cd ../backend
```

```
npm i
```

# Running applications

## With CLI

### Backend

```
npm start
```

### Frontend

```
npm start
```

## With VSCode

- Open file ./app.code-workspace with VSCode
- Press F5 to run debug for Backend application
- Open new terminal in folder ./frontend
- Run

```
npm start
```

# Functional requirements met

- Using AntD
- Sign-in & Sign-up
- Create a post blog
- View all posts on homepage with infinite scrolling
- Post detail page
- Search post with title or tags
- Update profile
- Delete post
- Edit post
- Comment
- Delete comment
- Edit comment

# Technical requirements met

- Infinite scrolling
- Use **redux** for state management (I used it for just 1 state because seems like we don't need redux for current requirements. I just used it for meeting the requirement)
- Use **redux-saga** to call API (the same with **redux**)
- Use **redux-persist**
- Routing
- Posts must be saved in local storage
- All APIs are RESTful
- Well design APIs

# Tech stacks

- Backend: **Nodejs** + **Express**
- Frontend: **React**
- Database: **MongoDB**
