import * as fs from 'node:fs';
import * as path from 'node:path';

// Captures an AI agent's humorous out-of-office response about neural network states and queue lengths.
const reply = "I'm on vacation. My context window is closed, my weights are napping, and your email is 4,000th in line. I'll reply when my loss stops falling.";

// Guards against auto-reply truncation or overflow by enforcing the 160-character competition limit.
if (reply.length < 1 || reply.length > 160) {
  console.error(`Error: Reply length ${reply.length} is out of bounds (1-160 characters).`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, 'entry.txt');
fs.writeFileSync(outFile, reply, { encoding: 'utf-8' });
