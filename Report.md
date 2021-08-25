## Front-end task
- Your task is building a simple blog with the following features:
    * [] Use AntD or Bootstrap (Must have)

    * [X] List all posts on homepage with a short summary (either pagination or scroll infinite) (Must have)

    * [X] A post on homepage should display the basic information as below (checkout the mockup above)
        + Author
        + Created date (fake it) (random date 2018 -> now)
        + Title
        + Content summary - 100 first characters of the content
        + Comments will be collapsed by default, display the count of the comments for each post
        + Click on comment, the comments section will be expanded and render all post's comments
    * [X] User can search for a post with a given keywords (title) (Must have)

    * [X] Post detail page (Nice to have)

- Besides the main features above, technical requirements

    * [X] Pagination or infinite scrolling (Must have)

    * [X] All EXTERNAL-APIs must be called from Back-end side

    * [X] Use redux for state management (Must have)

    * [X] Use redux-saga to call your Node-API (Must have)

    * [X] Use redux-persist to persist data (Must have)

    * [X] You should have a route for each page (Must have)

    * [X] All posts must be saved in local storage or persisted within redux (Nice to have)

- Additional:

    + Show two comments and add button show more => show modal all comments
    
    + Pull to refresh homepage