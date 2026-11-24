// Seventeen syllables: bisect ends on a blank line I wrote.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU =
  "The bisect ends here.\nI open the last commit:\na blank line I wrote.";

if ([...HAIKU].length < 1 || [...HAIKU].length > 200 || HAIKU.trim() === "") {
  throw new Error("entry must be 1-200 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, HAIKU, "utf8");
