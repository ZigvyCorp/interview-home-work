import { Application } from 'express';
import userRouter from './apis/user/router';
import postRouter from './apis/post/router';
import commentRouter from './apis/comment/router';

export default class Routes {
    
    public static user(_app: Application){
        return _app.use('', userRouter);
    }

    public static post(_app: Application){
        return _app.use('/post', postRouter);
    }

    public static comment(_app: Application){
        return _app.use('/comment', commentRouter);
    }

}