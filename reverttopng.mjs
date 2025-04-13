// Import replace-in-file
import { replaceInFile } from "replace-in-file";

// Define the directory where you want to revert
const COMPONENTS_DIR = "./src";

// Revert all .webp imports back to .png
async function revertImports() {
  try {
    const results = await replaceInFile({
      files: `${COMPONENTS_DIR}/**/*.{js,jsx,ts,tsx}`, // Target all JS/TS/JSX/TSX files
      from: /\.webp/g, // Find all .webp imports
      to: ".png", // Change them back to .png
    });

    console.log(`✅ Reverted ${results.length} import paths from WebP to PNG.`);
  } catch (error) {
    console.error("❌ Error reverting import paths:", error);
  }
}

// Run the script
revertImports();
