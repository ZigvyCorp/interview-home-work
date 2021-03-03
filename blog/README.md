# Assignment Checklist

## MOCK EXTERNAL-API: https://jsonplaceholder.typicode.com/

You're going to use some set of APIs below - [/posts](https://jsonplaceholder.typicode.com/posts) - [/comments](https://jsonplaceholder.typicode.com/comments) - [/users](https://jsonplaceholder.typicode.com/users) - /posts/1 - /posts/1/comments - /comments?postId=1 - All HTTP methods (GET, POST, PUT, PATCH, DELETE) are supported.
Checkout the jsonplaceholder.typicode.com for usage

## Front-end task

** [Mockup here](/mockup/homepage.png) **

- Your task is building a simple blog with the following features:

  - Use AntD or Bootstrap **(Must have)**

  - List all posts on homepage with a short summary (either pagination or scroll infinite) **(Must have)**

    - A post on homepage should display the basic information as below (checkout the mockup above)
      - Author
      - Created date (fake it)
      - Title
      - Content summary - 100 first characters of the content
      - Comments will be collapsed by default, display the **count** of the comments for each post
      - Click on comment, the comments section will be expanded and render all post's comments

  - User can search for a post with a given keywords (title) **(Must have)**
  - Post detail page **(Nice to have)**

- Besides the main features above, technical requirements

  - Pagination or infinite scrolling **(Must have)**
  - **All EXTERNAL-APIs must be called from Back-end side**
  - Use **redux** for state management **(Must have)**
  - Use **redux-saga** to call your Node-API **(Must have)**
  - Use **redux-persist** to persist data **(Must have)**
  - You should have a route for each page **(Must have)**
  - All posts must be saved in local storage or persisted within redux **(Nice to have)**

- Additional information
  - [React boilerplate](https://github.com/react-boilerplate/react-boilerplate) or other is accepted

## Back-end task

- To fullfil the Front-end requirements, you should implement the following APIs.

  - **All EXTERNAL-APIs must be called from Back-end side**Post APIs **(Must have)**
  - Server Structure must be MCV (per module) and well structured

- Additional requirements
  - All APIs should be RESTful **(Mandatory for ExpressJS)**
  - API should have a well design
- Additional information
  - You can use pre-defined json data as a reference
  - NodeJS & ExpressJS boilerplate or other is accepted
