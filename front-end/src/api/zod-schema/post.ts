import { z } from 'zod';
import { CommentSchema } from './comment';
import { OwnerSchema } from './user';

export const PostSchema = z.object({
    id: z.number(),
    ownerId: z.number(),
    title: z.string(),
    content: z.string(),
    comments: z.array(CommentSchema),
    owner: OwnerSchema,
    createdAt: z.string()
});

export const ArrayOfPostsSchema = z.array(PostSchema);
