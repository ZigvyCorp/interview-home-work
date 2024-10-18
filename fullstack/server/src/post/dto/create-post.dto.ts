import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreatePostSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    userId: z.number()
});

export class CreatePostDto extends createZodDto(CreatePostSchema) { }