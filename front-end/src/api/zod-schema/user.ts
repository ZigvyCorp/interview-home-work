import { z } from 'zod';

export const OwnerSchema = z.object({
    email: z.string(),
    name: z.string()
});
