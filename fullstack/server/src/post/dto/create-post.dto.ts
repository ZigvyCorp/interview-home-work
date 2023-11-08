import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreatePostSchema = z.object({});

export class CreatePostDto extends createZodDto(CreatePostSchema) { }