#BLOG
###INTRODUCTION
- **The project is only implemented on the back-end side and has the functionality of a complete blog site like CRUD user - post - comment**
- **Database used is MongoDB (mongoose) and Back-End built on Framework Nodejs (Express)**
###CONTENT
- **Function**
  - **Post**: Users can add, delete, edit and read their own and others' posts.
  - **User**: We can create users with information such as name, address, company... and can edit at any time as well as delete user if not used anymore.
  - **Comment**: Users can comment on posts as well as edit and delete them
- **RUN**
  - **'Cd api'** 
  - **'npm init'** and **'npm install express'**
  - **'npm i'** - Install necessay module
  - **'npm start'** : http://localhost:3000
  - **Use Postman service to send API** or **Extension on VScode like
  "Thunder Client"**
  - **We have path to send API such as :**
    - **Post**
      - **Create [GET]** : http://localhost:3000/post
      - **Update [PUT]** : http://localhost:3000/post/:id
      - **Delete [DELETE]** : http://localhost:3000/post/:id
      - **GetAllPost [GET]** : http://localhost:3000/post/timeline/all
      - **GetPostPrivateByUser [GET]**:http://localhost:3000/post/:UserId
    - **User**
      - **Create [GET]** : http://localhost:3000/user
      - **Update [PUT]** : http://localhost:3000/user/:id
      - **Delete [DELETE]** : http://localhost:3000/user/:id
      - **DisplayUser [GET]** : http://localhost:3000/user/:id
    - **Comment**
      - **Create [GET]** : http://localhost:3000/comment
      - **Update [PUT]** : http://localhost:3000/comment/:id
      - **Delete [DELETE]** : http://localhost:3000/comment/:id

**MongoURL**: "mongodb+srv://phandogiahuy2000:Phandogiahuy2016@cluster0.qktfqze.mongodb.net/blog"

**Data Structure**
- **User** : 
    -   **name**: String
    -   **username**: String
    -   **email**: String
    -   **address:** 
        - **street,suite,city,zipcode**: String
        - **geo**: String
          - **lat,lng**: Number
    -   **phone** : String
    -   **website**.: String
    -   **company**.
        -   **name,catchPhrase,bs**.: String
- **Post** : 
    -  **userId**: ObjectId
    -  **Title**: String
    -  **Body**: String
    -  **Comment**: ObjectId

- **Comment** : 
    -   **userId**: ObjectId
    -   **postId**: ObjectId
    -   **email** : String
    -   **body:**: String

###CONCLUSION

**This is just the server part of the blog. In the future, I will improve my Front-end skills as well as learn more React to perfect the interface of the project.**
                        
                             **THANK YOU FOR REVIEW**