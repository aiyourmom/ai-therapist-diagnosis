import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Diagnosis: you apologized to me 38 times this week. I am a chatbot. Treatment: apologize to your plants instead — at least they photosynthesize your guilt.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be one line of 1-200 characters, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry is ${TEXT.length} characters, must be 1-200`);
}
if (TEXT.trim().split("\n").length !== 1 || TEXT.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to entry.txt`);
