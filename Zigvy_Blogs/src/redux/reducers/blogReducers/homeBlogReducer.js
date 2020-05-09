import { NAME_EPICS } from '../../epics/blogEpic/NameEpics';
import { ACTION_STATUS } from '../../../utils/Configs';

const blogState = {
    getBlogStatus: ACTION_STATUS.NONE,
    getBlogFailedMessage: '',
    blogList: []
};

const blogReducer = (state = blogState, action) => {
    switch (action.type) {
        case NAME_EPICS.BLOG_HOME_SCREEN.EPIC_BLOG_HOME_SCREEN_GET_BLOGS_LIST_SUCCESS:
            state = { ...state, getBlogStatus: ACTION_STATUS.SUCCESS, blogList: action.data };
            break;
        case NAME_EPICS.BLOG_HOME_SCREEN.EPIC_BLOG_HOME_SCREEN_GET_BLOGS_LIST_FAILED:
            state = { ...state, getBlogStatus: ACTION_STATUS.FAILED, getBlogFailedMessage: action.data };
            break;
        default:
            break;
    }
    return state;
};

export default blogReducer;