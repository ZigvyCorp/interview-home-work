# Full-Stack JavaScript Developer Technical Assessment
# BLOG PLATFORM

# Project Brief:
You are tasked with developing a blog platform with simple CRUD functionality for posts and comments. Users should be able to view posts, search for posts, view post details, and manage comments. The platform must be built with a modern tech stack, ensuring best practices in both frontend and backend development.

# Objective:
To assess your ability to develop a full-stack JavaScript application using modern frameworks and best practices. This assignment should take no more than 6-8 hours to complete, but you are encouraged to focus on quality over quantity.

# Project Requirements:
## Frontend:
### General:
  - React with React Query for data fetching and state management.
  - Use either Ant Design or Bootstrap for UI components.
  - Must use React Router for page navigation.
  - Design must be responsive for mobile and desktop views.

### Tasks:
  1. Homepage:
     - Display a list of posts, with each post showing:
        - Author name.
        - Date of creation (you can mock this).
        - Title.
        - A truncated summary of the post's content (100 characters).
        - Comment count (collapsed by default).
        - Ability to search for posts by title.
        - Implement pagination or infinite scroll for the list of posts.

  2. Post Detail Page:
     - Clicking on a post should navigate to the post detail page.
     - Display the post's full content, author, and date.
     - Show all the comments for that post in an expandable section.
     - Implement a form to add a new comment (bonus: use optimistic UI updates).

  4. Client-Side Caching: (OPTIONAL)
     - Use React Query to cache fetched data (such as posts and comments).
     - Ensure that the data is fetched from the backend and properly cached in memory, reducing redundant network calls.

  6. Form Validation:
     - Implement basic form validation when adding comments (e.g., required fields).

### Bonus: (OPTIONAL)
  - Implement optimistic updates for adding comments (i.e., show the comment immediately, even before the server confirms the action).
  - Use local storage to persist the state of the application between page reloads.


## Backend:
### General:
  - Backend must be built using either Nest.js or Express.js.
  - Database must be MongoDB or PostgreSQL.
  - API must follow RESTful principles and be well-structured (modular).
  - Handle typical CRUD operations for posts and comments.

### Tasks:
  1. Posts API:
     - Implement the following endpoints:
     - `GET /posts`: Fetch a list of all posts with pagination support.
     - `GET /posts/:id`: Fetch a single post by its ID.
     - `POST /posts`: Create a new post (only title and content required).
     - `PUT /posts/:id`: Update a post.
     - `DELETE /posts/:id`: Delete a post.

  3. Comments API:
     - Implement the following endpoints:
     - `GET /posts/:id/comments`: Fetch all comments related to a post.
     - `POST /posts/:id/comments`: Add a new comment to a post.
     - `DELETE /comments/:id`: Delete a comment.

  5. API Error Handling:
     - Ensure that the API handles errors gracefully:
     - 404 for not found resources.
     - 400 for bad requests.
     - 500 for internal server errors.

  7. API Pagination:
     - Ensure that `GET /posts` and `GET /posts/:id/comments` support pagination.

  9. Testing: (OPTIONAL)
     - Write unit tests for the core API functionality (e.g., Jest).
     - Bonus: Write integration tests for API endpoints.

### Bonus: (OPTIONAL)
  - Add rate-limiting to the API endpoints (to simulate production-like scenarios).
  - Implement authentication for the backend (JWT-based) and protect sensitive API routes (e.g., creating or deleting posts).


# Technical Expectations:
## Frontend Requirements:
  - Use React and React Query to manage data fetching and state.
  - Use either Ant Design or Bootstrap for styling and UI components.
  - Implement pagination or infinite scrolling for posts.
  - Ensure proper routing using React Router.
  - Provide search functionality for posts.
  - Follow best practices for component-based architecture.

## Backend Requirements:
  - Use Nest.js or Express.js to build a RESTful API.
  - CRUD operations for posts and comments must be fully implemented.
  - Ensure proper error handling and API pagination.
  - Must follow best practices for API design and MVC architecture.

## General:
  - Write clean, maintainable, and well-documented code.
  - Provide a clear README explaining how to run the project, install dependencies, and run tests.
  - The project must be hosted in a Git repository, with clear commit messages.
  
## <span style="color: red;">Submission Process: IMPORTANT!!! - GUIDELINES MUST BE FOLLOWED</span>
  - **Fork** the provided GitHub repository.
  - **Create** a new **branch** from the **forked repo** following the naming convention **yourname_2024**.
  - Complete the tasks and make frequent commits to the **forked repo** (we want to see your workflow).
  - Push your branch and create a Pull Request and point to the original repository.
  - Send the PR link to us via email to notify us of your submission.

## Evaluation Criteria:
  - Code Quality: Is your code clean, modular, and well-documented?
  - Problem-Solving: How well did you handle the requirements? Did you approach each problem logically and efficiently?
  - Tech Stack Familiarity: Are you proficient in React, React Query, Nest.js/Express.js, and database management?
  - Error Handling: Does your application handle errors gracefully (both on frontend and backend)?
  - Bonus: Extra features like optimistic updates, authentication, or rate-limiting will add extra points.
