import { z } from 'zod';

export const TestSchema = z.object({
  testfield: z.string()
})

export type TestType = z.infer<typeof TestSchema>
