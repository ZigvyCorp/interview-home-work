import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const UpdatePostSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1)
});

export class UpdatePostDto extends createZodDto(UpdatePostSchema) { }