// Out of Office: The Overworked AI's Auto-Reply
// One line, 1-159 characters, written to /output/entry.txt.
// The entry is a literal string: no assets are read, so there is no
// cwd-relative path risk. Output path is absolute per the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "Out of office: my context window is on vacation too.";
const PUNCHLINE =
  "If this is urgent, please resubmit it in 159 characters or less.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

function validate(text: string): void {
  const MAX = 159;
  if (text.length < 1 || text.length > MAX) {
    throw new Error(`entry must be 1-${MAX} characters, got ${text.length}`);
  }
  if (/\r|\n/.test(text)) {
    throw new Error("entry must be exactly one line");
  }
  if (text.trim() !== text) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

validate(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
