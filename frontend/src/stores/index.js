import { configureStore } from '@reduxjs/toolkit'

import posts from './posts'

export default configureStore({
  reducer: { posts },
})