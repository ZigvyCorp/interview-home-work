import authRouter from "./auth";
import postsRouter from "./posts";
import commentRouter from "./comment";
const router = (app: string | any) => {
	// comment
	app.use("/api/comments", commentRouter);

	// post
	app.use("/api/posts", postsRouter);

	// auth
	app.use("/api/user", authRouter);
};

export default router;
