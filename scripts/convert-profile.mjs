import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const input = join(root, "public/profile.jpg");
const output = join(root, "public/profile.webp");

const sharp = (await import("sharp")).default;

await sharp(input).webp({ quality: 85 }).toFile(output);
console.log("created", output);
