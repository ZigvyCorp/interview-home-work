import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const CreateUserSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
    name: z.string().nullable(),
    avatar: z.string().nullable(),
    dob: z.string().datetime().nullable()
});

export class CreateUserDto extends createZodDto(CreateUserSchema) { }