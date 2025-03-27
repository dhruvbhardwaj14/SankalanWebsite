import fs from "fs";
import path from "path";
import sharp from "sharp";
import { replaceInFile } from "replace-in-file";

// Define directories to scan
const IMAGE_DIR = "./src/assets/PNG";
const COMPONENTS_DIR = "./src";

// Recursively scan and convert PNG to WebP
async function convertImagesToWebP(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await convertImagesToWebP(filePath); // Recursively scan subdirectories
    } else if (path.extname(file).toLowerCase() === ".png") {
      const webpPath = filePath.replace(".png", ".webp");

      // Convert PNG to WebP
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`✅ Converted: ${filePath} -> ${webpPath}`);
    }
  }
}

// Convert all PNG files in IMAGE_DIR
await convertImagesToWebP(IMAGE_DIR);

// Update Import Paths Automatically
async function updateImports() {
  try {
    const results = await replaceInFile({
      files: `${COMPONENTS_DIR}/**/*.{js,jsx,ts,tsx}`,
      from: /\.png/g,
      to: ".webp",
    });

    console.log(`✅ Updated ${results.length} import paths from PNG to WebP.`);
  } catch (error) {
    console.error("Error updating import paths:", error);
  }
}

// Run after conversion delay to ensure all conversions are complete
setTimeout(() => {
  updateImports();
}, 3000);
