import { readFileSync, statSync } from "fs";

import { TokenTextSplitter } from "@langchain/textsplitters";
import clipboardy from "clipboardy";
import pressAnyKey from "press-any-key";

const INPUT_FILEPATH = `./input.txt`;

const textSplitter = new TokenTextSplitter({
  chunkSize: 10_000, // Maximum token size for each chunk
  chunkOverlap: 0, // Overlap between chunks, set to 0 to avoid any overlap
});

function formatFileSize(sizeBytes: number) {
  let fileSizeUnit = `gigabyte`;

  if (sizeBytes < 10 ** 3) {
    fileSizeUnit = `byte`;
  } else if (sizeBytes < 10 ** 6) {
    fileSizeUnit = `kilobyte`;
  } else if (sizeBytes < 10 ** 9) {
    fileSizeUnit = `megabyte`;
  }

  return new Intl.NumberFormat(`en-US`, {
    style: `unit`,
    unit: fileSizeUnit,
  }).format(sizeBytes);
}

function readInputFile() {
  const inputFileSizeBytes = statSync(INPUT_FILEPATH).size;

  console.log(
    `🔎 Reading ${INPUT_FILEPATH} (${formatFileSize(inputFileSizeBytes)})...`
  );

  return readFileSync(INPUT_FILEPATH, {
    encoding: `utf-8`,
    flag: `r`,
  });
}

async function splitTextAndCopyChunks() {
  const chunks = await textSplitter.splitText(readInputFile());

  console.log(
    `✂️ Split text from ${INPUT_FILEPATH} into ${chunks.length} chunks.\n`
  );

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    await clipboardy.write(chunk);
    await pressAnyKey(
      `📋 Copied chunk ${i + 1}/${chunks.length} to clipboard (${formatFileSize(
        chunk.length
      )}). Press any key to continue (or Ctrl+C to quit)...`,
      { preverseLog: true }
    );
  }
}

try {
  void splitTextAndCopyChunks();
} catch (error) {
  console.error(`❌ Error splitting text from ${INPUT_FILEPATH}:`, error);
}
