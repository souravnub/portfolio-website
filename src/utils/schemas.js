import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Name sould be minimum 1 character long"),
    email: z.string().email("Invalid email"),
    message: z
        .string()
        .trim()
        .min(10, "Message should be atleast 10 characters long"),
    token: z.string().min(1),
});
