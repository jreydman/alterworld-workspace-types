"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSchema = void 0;
const zod_1 = require("zod");
exports.TestSchema = zod_1.z.object({
    testfield: zod_1.z.string()
});
