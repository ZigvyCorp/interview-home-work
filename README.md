Features

1. Pagination or Infinite Scrolling (Must Have)
   The frontend application implements infinite scrolling to display posts. This ensures efficient data loading and a seamless user experience when navigating through large lists of posts.

2. All External APIs Called from Backend (Must Have)
   All external API calls are made from the backend to ensure better security and separation of concerns. This also helps in adhering to best practices by abstracting API interaction from the frontend.

3. State Management using Redux (Replaced with Zustand) (Must Have)
   Instead of Redux, Zustand is used for state management. Zustand provides a simpler and more lightweight solution for managing the global state of the application. It offers a concise API that supports persistence and reactivity without the boilerplate code typical of Redux.

4. API Calls using redux-saga (Replaced with React Query) (Must Have)
   Rather than using redux-saga for handling API calls, React Query is leveraged. React Query simplifies the process of fetching, caching, synchronizing, and updating server state in React applications.

5. Persisting Data using redux-persist (Replaced with Zustand Persist) (Must Have)

I also have pull-request followed all the tech-stack above [Link](https://github.com/ZigvyCorp/interview-home-work/pull/165)
