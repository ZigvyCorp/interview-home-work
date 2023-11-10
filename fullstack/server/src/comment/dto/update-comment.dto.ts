import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const UpdateCommentSchema = z.object({
    content: z.string().min(1)
});

export class UpdateCommentDto extends createZodDto(UpdateCommentSchema) { }