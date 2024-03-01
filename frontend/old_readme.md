# ATTENTION: DEPRECATED

# Zigvy Technical Assignment Interview

## Description
- This is a **Small Project Test** for online interview at Zigvy Corp. This assignment has 2 main tasks: **Front-end** and **Back-end**. You will be required to complete each tasks with your applied position. For short, you can check the list below
  - Full-stack engineer: Both Front-end and Back-end
  - Front-end engineer: Front-end only
  - Back-end engineer: Complete basic layout of Front-end task and Back-end task

- It should take no more than 2 days for you to complete the test. Please don't be stressed with the test, just show us the best you can do.  Submit what you can, even if you can’t complete it all. This will help us to understand the way you think, solve problems, and also give us some insight into your skills.

- Based on the deadline and agreement between the candidate and Zigvy, if you haven't submitted your Project Test on time, your appliance will be rejected automatically.

- You must use **React** for front-end development. For back-end, **ExpressJS** or **MeteorJS** is a must. And database, you must use either **MongoDB** or **PostgreSQL**. Other libraries that will help you with your development are not limited. i.e: axios, lodash, Bootstrap, Ant design, etc.

## Workflow
  - Fork the repo and checkout your forked repo
  - Create a new branch name pattern: **your_name_20xx**
      - Where xx is the current year.
  - Work and commit codes on **your new branch**.
  - When you finish your work, **push** the branch on your **forked repo**.
  - **Email us to notify** that you have done the test.

## Front-end task
** [Mockup here](/mockup/homepage.png) **

- Your task is building a simple blog with the following features:
  - Use AntD or Bootstrap **(Must have)**
  - Sign-in & Sign-up **(Mandatory for MeteorJS - Optional for ExpressJS)**
  - User can create/write a post blog **(Must have)**
    - Title
    - Tags
    - Content
      - Text content **(Must have)**
      - Basic Rich Text Editor Toolbar (Bold, Italic, Underline) **(Nice to have)**
      - Insert images **(Nice to have)**
  - User/Visitor can see all posts on homepage with a short summary (either pagination or scroll infinite) **(Must have)**
    - A post on homepage should display the basic information as below
      - Author
      - Created date
      - Title
      - Content summary - 100 first characters of the content
  - Post detail page **(Nice to have)**
  - User can search for a post with a given keywords (title & tags search) **(Must have)**
  - User can update their profile **(Nice to have)**
  - User can delete a his/her posted post **(Nice to have)**
  - User can edit a his/her posted post **(Nice to have)**
  - User can comment on a post **(Nice to have)**
  - User can delete his/her comment **(Nice to have)**
  - User can edit his/her comment **(Nice to have)**


- Besides the main features above, technical requirements
  - Pagination or infinite scrolling **(Must have)**
  - Use our pre-defined json files to mock API calls **(Must have)**
  - Use **redux** for state management **(Must have)**
  - Use **redux-saga** to call mock API **(Must have)**
  - Use **redux-persist** to persist data **(Must have)**
  - You should have a route for each page **(Must have)**
  - All posts must be saved in local storage or persisted within redux **(Nice to have)**

- Additional information
  - Post's content and comment can be a plain text but if you can implement [rich text format](https://en.wikipedia.org/wiki/Rich_Text_Format), that would be awesome!!!
  - For json files, please head to `data` folder
  - [React boilerplate](https://github.com/react-boilerplate/react-boilerplate) or other is accepted

## Back-end task
- To fullfil the Front-end requirements, you should implement the following APIs.
  - Authentication & Registration API **(Mandatory for MeteorJS - Optional for ExpressJS)**
  - Post APIs **(Must have)**
  - Comment APIs **(Nice to have)**
  - User profile APIs **(Nice to have)**

- Additional requirements
  - All APIs should be RESTful **(Mandatory for ExpressJS)**
  - API should have a well design
- Additional information
  - You can use pre-defined json data as a reference
  - NodeJS & ExpressJS boilerplate or other is accepted
