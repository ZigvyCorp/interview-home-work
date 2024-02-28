import { z } from 'zod';

export const CommentSchema = z.object({
    id: z.number(),
    email: z.string(),
    content: z.string(),
    createdAt: z.string()
});
