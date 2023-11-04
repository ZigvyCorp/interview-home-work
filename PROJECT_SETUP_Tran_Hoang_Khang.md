# Project Details

## Frontend
- Utilized AntD as the UI library.
- Implemented the following features on the homepage:
  - Display a paginated list of all posts.
  - Implement a post search feature by title.
  - Create a post detail page.
- Utilized `redux` for state management.
- Employed `redux-saga` for making API calls.
- Ensured that all posts are persisted within the redux store.

## Backend
- Developed using `ExpressJS`.
- Designed APIs following best practices.
- Implemented the project using the MVC architecture.

## Postman Workspace
- [Postman Workspace](https://www.postman.com/speeding-satellite-751496/workspace/zigvy-interview)

## Project Startup Instructions

### Frontend
- Run the following command to start the frontend:
    - **yarn start**
- The project will be available at [http://localhost:3000](http://localhost:3000).

### Backend
- Step 1: Run the migration to initialize the database tables: 
    - **yarn migration:up**
- Step 2: Start the backend project using the following command:
    - **yarn dev**

Follow these steps to set up and run the project successfully.