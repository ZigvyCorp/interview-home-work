# Assignment Checklist

## USAGE

- Install dependencies then run the below command:

`npm run dev`

## MOCK EXTERNAL-API

- [x] /posts
- [x] /comments
- [x] /users
- [x] /posts/:id
- [x] /posts/:id/comments
- [x] /comments?postId=id

## Front-end task

- Your task is building a simple blog with the following features:

  - [x] Use AntD or Bootstrap **(Must have)**

  - [x] List all posts on homepage with a short summary (either pagination or scroll infinite) **(Must have)**

    - A post on homepage should display the basic information as below (checkout the mockup above)
      - [x] Author
      - [x] Created date (fake it)
      - [x] Title
      - [x] Content summary - 100 first characters of the content
      - [x] Comments will be collapsed by default, display the **count** of the comments for each post
      - [x] Click on comment, the comments section will be expanded and render all post's comments

  - [x] User can search for a post with a given keywords (title) **(Must have)**
  - [ ] Post detail page **(Nice to have)**

- Besides the main features above, technical requirements
  - [x] Pagination or infinite scrolling **(Must have)**
  - [x] **All EXTERNAL-APIs must be called from Back-end side**
  - [x] Use **redux** for state management **(Must have)**
  - [x] Use **redux-saga** to call your Node-API **(Must have)**
  - [x] Use **redux-persist** to persist data **(Must have)**
  - [x] You should have a route for each page **(Must have)**
  - [x] All posts must be saved in local storage or persisted within redux **(Nice to have)**

## Back-end task

- To fullfil the Front-end requirements, you should implement the following APIs.

  - [x] **All EXTERNAL-APIs must be called from Back-end side**Post APIs **(Must have)**
  - [x] Server Structure must be MCV (per module) and well structured

- Additional requirements
  - [x] All APIs should be RESTful **(Mandatory for ExpressJS)**
  - [x] API should have a well design
