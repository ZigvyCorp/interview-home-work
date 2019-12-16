# Zigvy Technical Assignment Interview

## Description
- This is the **web technical assignment** for online interview at Zigvy. This assignment has 2 main tasks: **Front-end** and **Back-end**. You will be required to complete each tasks with your applied position. For short, you can check the list below
  - Full-stack engineer: Both Front-end and Back-end
  - Front-end engineer: Front-end only
  - Back-end engineer: Complete basic layout of Front-end task and Back-end task
- You give have **a week** to complete this assignment. Once the week is over and you haven't finished your assignment, your appliance will be rejected automatically
- You must use **React** for front-end development. For back-end, **ExpressJS** or **MeteorJS** is a must. And database, you must use either **MongoDB** or **PostgreSQL**. Other libraries that will help you with your development are not limited. i.e: axios, lodash, Bootstrap, Ant design, etc.

## Front-end task
** Insert the mockup design here **

- Your task is building a simple blog with the following features:
  - Login and logout
  - User can write a post blog
  - User can delete a his/her posted post
  - User can edit a his/her posted post
  - User can comment on a post
  - User can delete his/her comment
  - User can update his/her comment
  - User can see other's user posted posts
  - User can search for a blog with given keywords
  - All posts must be shown on homepage with a short summary
  - A post on homepage should display these basic information
    - Owner
    - Created date
    - Title
    - Content summary - 100 first characters of the content
  - All posts must be saved in local storage or persisted within redux

- Besides the main features above, here are additional requirements
  - Pagination or infinite scrolling is a must
  - Use our pre-defined json files to mock API calls
  - Use redux for state management
  - Use redux-saga to call mock API. Do not use redux-thunk :)
  - Use redux-persist to persist data
  - You should have a route for each page

- Additional information
  - Post's content and comment don't have to be in [rich text format](https://en.wikipedia.org/wiki/Rich_Text_Format). Which mean, everything will be in plain text, no video, no image or embedded HTML.
  - For json files, please head to `data` folder
  - Template or boilerplate is accepted. You can also use Zigvy's predefined template [here](#)
  
  
## Back-end task