import { z } from 'zod';
export declare const TestSchema: z.ZodObject<{
    testfield: z.ZodString;
}, "strip", z.ZodTypeAny, {
    testfield: string;
}, {
    testfield: string;
}>;
export type TestType = z.infer<typeof TestSchema>;
