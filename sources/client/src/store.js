import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./services/auth/auth.slice";
import postSlice from "./services/post/post.slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        post: postSlice.reducer,
    },
});

export default store;
