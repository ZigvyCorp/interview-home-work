import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const UpdatePostSchema = z.object({});

export class UpdatePostDto extends createZodDto(UpdatePostSchema) { }