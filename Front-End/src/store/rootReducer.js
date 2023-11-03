import { combineReducers } from "redux";
import postsCardsReducer from "../pages/HomePage/Home/Card/duck/reducer";
import searchReducer from "../pages/HomePage/Home/Search/duck/reducer";
import detailReducer from "../pages/HomePage/DetailPage/duck/reducer";
import topMovieReducer from "../pages/HomePage/Home/duck/reducer";
const rootReducer = combineReducers({
    postsCardsReducer,searchReducer,detailReducer,topMovieReducer
});

export default rootReducer;