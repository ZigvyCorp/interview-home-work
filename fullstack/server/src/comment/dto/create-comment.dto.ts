import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreateCommentSchema = z.object({});

export class CreateCommentDto extends createZodDto(CreateCommentSchema) { }