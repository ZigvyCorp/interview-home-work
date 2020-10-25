import { NAME_ACTIONS } from './ActionNames';

export function getBlogList(){
    return {
        type: NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN,
        typeAction: NAME_ACTIONS.BLOG.BLOG_HOME_SCREEN_GET_BLOGS_LIST
    };
}