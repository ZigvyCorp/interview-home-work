import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const UpdateCommentSchema = z.object({});

export class UpdateCommentDto extends createZodDto(UpdateCommentSchema) { }