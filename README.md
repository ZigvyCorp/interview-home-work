# Blog Platform - README

## Project Overview
This project is a **full-stack blog platform** with CRUD functionality for posts and comments. It allows users to view posts and comments, leveraging modern web development technologies and best practices. The application is designed to be responsive and provides a clean, user-friendly interface for mobile and desktop users.

---

## Features

### Frontend
- **Homepage**:  
  - Display a list of paginated posts with author, creation date, title, truncated content, and comment count.   

- **Post Detail Page**:  
  - View full content of a post along with its author and date.  
  - Expandable comment section.  
  - Form for adding new comments with validation.

- **Optimizations**:  
  - Client-side caching with React Query.  
  - Form validation with react-hook-form.  
  - Responsive design using Ant Design and Tailwind CSS.

---

### Backend
- RESTful API built with **Express.js**.  
- MongoDB as the database.  
- CRUD operations for posts and comments.  
- Error handling for 404, 400, and 500 errors.  
- Pagination support for posts and comments.  

---

## Tech Stack

### Frontend
- **Framework**: React.js (with React Query, React Router)  
- **UI Components**: Ant Design, Tailwind CSS  
- **Forms**: react-hook-form  
- **Language**: TypeScript  

### Backend
- **Framework**: Express.js  
- **Database**: MongoDB 
- **Language**: TypeScript  

---

## Getting Started

### Prerequisites
- Node.js (>=18.x)
- npm
- MongoDB database

---

### Installation

1. **Install frontend dependencies:**:
   ```bash
   cd front-end
   npm install
   ```
2. **Install backend dependencies:**:
   ```bash
   cd back-end
   npm install
   ```
### Configuration

1. **Frontend:**:
   Create an `.env` file by copying the `.env.example` file
   ```bash
   cd front-end
   cp .env.example .env
   ```
   
2. **Install backend dependencies:**:
   Create an `.env` file by copying the `.env.example` file
   ```bash
   cd back-end
   cp .env.example .env
   ```
   Then config your mongoDB uri in the `.env` file

### Running the Application
1. **Start the backend**:

  ```bash
    cd back-end
    npm run dev
  ```
2. **Start the frontend**:

  ```bash
    cd front-end
    npm run dev
  ```
3. **Open the app in your browser:**
```
    http://localhost:5173
  ```
### API Endpoints

Authentication
* `POST /auth/login`: Login.
* `POST /auth/logout`: Logout.
* `POST /auth/refresh-token`: Refresh the access token.
* `GET /auth/logged-user`: Get the current logged user.

Posts
* `GET /posts`: Fetch paginated posts.
* `GET /posts/:id`: Fetch a single post.
* `POST /posts`: Create a new post.
* `PUT /posts/:id`: Update a post.
* `DELETE /posts/:id`: Delete a post.

Comments
* `GET /posts/:id/comments`: Fetch comments for a post.
* `POST /posts/:id/comments`: Add a comment to a post.
* `DELETE /comments/:id`: Delete a comment.

### Bonus Features
* Optimistic Updates: Comments are added instantly on the frontend before confirmation from the server.
* Authentication: JWT-based authentication for secured routes.
* Rate Limiting: API endpoints include rate-limiting for production-like scenarios.