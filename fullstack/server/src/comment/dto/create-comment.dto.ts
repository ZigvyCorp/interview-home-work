import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreateCommentSchema = z.object({
    content: z.string().min(1),
    userId: z.number(),
    postId: z.number()
});

export class CreateCommentDto extends createZodDto(CreateCommentSchema) { }