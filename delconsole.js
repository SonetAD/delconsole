const fs = require('fs');
const path = require('path');

// Function to process a single file
function processFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  let modifiedContent = fileContent.replace(/console\.log\s*\([^)]+\)/g, '');

  // Write the modified content back to the file
  fs.writeFileSync(filePath, modifiedContent);
}

// Recursive function to find and process all matched files
function findAndProcessFiles(dir, exts) {
  const files = fs.readdirSync(dir);

  for (let file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // If it's a directory, recurse into it
      findAndProcessFiles(filePath, exts);
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      // Process the file if it matches one of the extensions
      processFile(filePath);
      console.log(`Processed ${filePath}`);
    }
  }
}

// Main function to run the script
function delConsole(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    console.error(`Directory does not exist: ${directoryPath}`);
    return;
  }

  const extensions = ['.js', '.jsx', '.ts', '.tsx'];
  findAndProcessFiles(directoryPath, extensions);
}

module.exports = delConsole;
