import { acceptedUserMW } from "./middleware";
import { Router, Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import PostDAO from '@daos/Post/PostDao';
import { OK } from 'http-status-codes';
import { ISearchPost, IPost } from '@entities/Post';
import logger from '@shared/Logger';

const router = Router().use(acceptedUserMW);
const postDao = new PostDAO();

/******************************************************************************
 *                      Get All Post by owner id - "GET /api/posts/{ownerId}"
 ******************************************************************************/
router.get('/:ownerId', async (req: Request, res: Response) => {
	const { ownerId } = req.params as ParamsDictionary;
	const posts = await postDao.getAllByUser(Number(ownerId));
	return res.status(OK).json({ posts });
});

/******************************************************************************
 *                      Get All Post by title or tags - "GET /api/posts"
 ******************************************************************************/
router.get('/', async (req: Request, res: Response) => {
	const { title, tags } = req.query as ParamsDictionary;
	const posts = await postDao.getAll({
		title,
		tags: { '$in': tags },
	});
	return res.status(OK).json({ posts });
});

/******************************************************************************
 *                      Create a Post - "POST /api/posts"
 ******************************************************************************/
router.post('/', async (req: Request, res: Response) => {
	const { owner, title, tags, content } = req.body;
	const newPost = {
		owner: Number(owner),
		title,
		tags,
		content,
		created_at: new Date().getTime()
	};
	const createdPost = await postDao.add(newPost)
	return res.status(OK).json({ createdPost });
});

export default router;
