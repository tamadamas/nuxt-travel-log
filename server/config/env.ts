import { z } from "zod/v4";

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
