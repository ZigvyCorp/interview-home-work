# Zigvy Technical Assignment Interview

## Description
- This is a **Small Project Test** for online interview at Zigvy Corp. This assignment has 2 main tasks: **Front-end** and **Back-end**. You will be required to complete each tasks with your applied position. For short, you can check the list below
  - Full-stack engineer: Both Front-end and Back-end
  - Front-end engineer: Front-end only
  - Back-end engineer: Complete basic layout of Front-end task and Back-end task

- It should take no more than 1 days for you to complete the test. Please don't be stressed with the test, just show us the best you can do.  Submit what you can, even if you can’t complete it all. This will help us to understand the way you think, solve problems, and also give us some insight into your skills.

- Based on the deadline and agreement between the candidate and Zigvy, if you haven't submitted your Project Test on time, your appliance will be rejected automatically.

- You must use **React** for front-end development. For back-end, **ExpressJS** or **MeteorJS** is a must. And database, you must use either **MongoDB** or **PostgreSQL**. Other libraries that will help you with your development are not limited. i.e: axios, lodash, Bootstrap, Ant design, etc.

## Workflow
  - Fork the repo and checkout your forked repo
  - Create a new branch name pattern: **your_name_20xx**
      - Where xx is the current year.
  - Work and commit codes on **your new branch**.
  - When you finish your work, **push** the branch on your **forked repo**.
  - Create a PR from your forked repo to the origin repo.
  - **Email us the link of your PR to notify** that you have done the test.

## MOCK EXTERNAL-API: https://jsonplaceholder.typicode.com/
  You're going to use some set of APIs below
    - [/posts](https://jsonplaceholder.typicode.com/posts)
    - [/comments](https://jsonplaceholder.typicode.com/comments)
    - [/users](https://jsonplaceholder.typicode.com/users)
    - /posts/1
    - /posts/1/comments
    - /comments?postId=1
    - All HTTP methods (GET, POST, PUT, PATCH, DELETE) are supported.
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
