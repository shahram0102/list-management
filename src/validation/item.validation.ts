import z from "zod";

export const itemSchemaValidation = z.object({
  title: z.string().min(2).max(40),
  subTitle: z.string().min(10).max(150),
});
