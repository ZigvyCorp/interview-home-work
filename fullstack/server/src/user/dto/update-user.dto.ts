import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const UpdateUserSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
    name: z.string().nullable(),
    avatar: z.string().nullable()
});

export class UpdateUserDto extends createZodDto(UpdateUserSchema) { }