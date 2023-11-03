import { Request, Response } from 'express';
import { searchPostByKeywordService } from '../services/post.service';

// [GET] /api/v1/search/posts?keyword=:keyword
export const searchPostByKeywordController = async (req: Request, res: Response) => {
    try {
        const { keyword } = req.query;
        const postResponse = await searchPostByKeywordService({ keyword: keyword as string });

        return res.status(200).send({ content: postResponse });
    } catch (error) {
        return res.status(500).send({ message: (error as Error).message });
    }
};
