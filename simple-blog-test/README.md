## Frontend Task
**Task completed**
- Use Bootstrap 
- List all posts on homepage with a short summary with pagination
- A post on homepage display the basic information:
    - Author name
    - Created date 
    - Title
    - Content summary - 100 first characters of the content
    - Comments will be collapsed by default, display the **count** of the comments for each post
    - Click on comment, the comments section will be expanded and render all post's comments 
- User can search for a post with a given keywords (title)
- User can click read more to see post detail page

**Technical requirements**
- Pagination
- **All EXTERNAL-APIs are called from Back-end side**
- Use **redux** for state management 
- Use **redux-saga** to call your Node-API 
- Have a route for each page
    - [Home]: http://localhost:5173/
    - [Search]: http://localhost:5173/search
    - [Post-Detail]: http://localhost:5173/post/:id


## Backend Task
- Use **NodeJS** and framework **ExpressJS** to develop APIs
- Use **MongoDB** and ODM **Mongoose** to store data
- Server Structure: Router - Controller - Model
- APIs:
    - http://localhost:3500/api/v1/posts/page=1&limit=10    (get all post with pagination)
    - http://localhost:3500/api/v1/posts/:id                (get post detail with specific id)
    - http://localhost:3500/api/v1/search?q=searchQuery     (search post)