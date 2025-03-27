const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const replace = require("replace-in-file");

// Define directories to scan
const IMAGE_DIR = "./src/assets";
const COMPONENTS_DIR = "./src";

// Recursively scan and convert PNG to WebP
function convertImagesToWebP(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      convertImagesToWebP(filePath); // Recursively scan subdirectories
    } else if (path.extname(file).toLowerCase() === ".png") {
      const webpPath = filePath.replace(".png", ".webp");

      // Convert PNG to WebP
      sharp(filePath)
        .webp({ quality: 80 }) // You can adjust quality if needed
        .toFile(webpPath, (err) => {
          if (err) {
            console.error(`Error converting ${filePath}:`, err);
          } else {
            console.log(`✅ Converted: ${filePath} -> ${webpPath}`);
          }
        });
    }
  });
}

// Convert all PNG files in IMAGE_DIR
convertImagesToWebP(IMAGE_DIR);

// Update Import Paths Automatically
async function updateImports() {
  try {
    const results = await replace({
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
}, 3000); // Add delay to allow conversion to finish
