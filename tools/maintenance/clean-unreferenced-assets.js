#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Parse command-line arguments
const args = process.argv.slice(2);
const FIX_MODE = args.includes('--fix');
const helpRequested = args.includes('--help') || args.includes('-h');

// Get asset folder name
const assetsDirIndex = args.indexOf('--assets-dir');
const ASSETS_FOLDER_NAME = assetsDirIndex !== -1 && args[assetsDirIndex + 1]
  ? args[assetsDirIndex + 1]
  : 'assets';

// Get target directory (filter out flags and their values)
const targetDirArg = args.find((arg, index) => {
  if (arg.startsWith('--') || arg.startsWith('-')) return false;
  // Skip if this is a value for --assets-dir
  if (index > 0 && args[index - 1] === '--assets-dir') return false;
  return true;
});

// Show help
if (helpRequested) {
  console.log(`
Usage: node clean-unreferenced-assets.js [directory] [options]

Arguments:
  directory         Directory containing subdirectories with markdown files and assets folders
                    (defaults to 'modules' relative to project root)

Options:
  --fix             Actually delete unreferenced assets (default is to only preview)
  --assets-dir DIR  Name of the folder containing assets (default: 'assets')
  --help, -h        Show this help message

YAML Frontmatter:
  If a markdown file contains YAML frontmatter with a 'copy-images-to' key,
  that value will be used as the assets directory for that subdirectory,
  taking precedence over the --assets-dir option.

  Example frontmatter:
    ---
    copy-images-to: assets
    ---

Examples:
  node clean-unreferenced-assets.js
  node clean-unreferenced-assets.js modules
  node clean-unreferenced-assets.js modules --fix
  node clean-unreferenced-assets.js modules --assets-dir images
  node clean-unreferenced-assets.js docs --assets-dir media --fix
`);
  process.exit(0);
}

console.log('==========================================');
console.log('  Cleaning Unreferenced Assets');
console.log('==========================================\n');

if (!FIX_MODE) {
  console.log('🔍 PREVIEW MODE - No files will be deleted (use --fix to delete)\n');
} else {
  console.log('⚠️  FIX MODE - Unreferenced assets will be deleted\n');
}

console.log(`📁 Assets folder name (default): '${ASSETS_FOLDER_NAME}'\n`);

/**
 * Extracts the 'copy-images-to' value from YAML frontmatter in a markdown file
 * @param {string} mdFilePath - Path to the markdown file
 * @returns {string|null} The copy-images-to value or null if not found
 */
function extractAssetsDirFromFrontmatter(mdFilePath) {
  try {
    const content = fs.readFileSync(mdFilePath, 'utf8');
    
    // Check if file starts with YAML frontmatter (---)
    if (!content.startsWith('---')) {
      return null;
    }
    
    // Extract the frontmatter between the first two ---
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      return null;
    }
    
    // Parse the YAML
    const frontmatter = yaml.load(frontmatterMatch[1]);
    
    // Return the copy-images-to value if it exists
    return frontmatter && frontmatter['copy-images-to'] ? frontmatter['copy-images-to'] : null;
  } catch (error) {
    // If there's an error reading or parsing, just return null
    return null;
  }
}

function cleanModuleAssets(mdFiles, assetsDir, moduleName, assetsFolderName, usingFrontmatter = false) {
  if (!fs.existsSync(assetsDir)) {
    console.log(`⚠️  Assets directory not found: ${assetsDir}`);
    return;
  }
  
  if (mdFiles.length === 0) {
    console.log(`⚠️  No markdown files found in: ${moduleName}`);
    return;
  }
  
  console.log(`📂 Processing: ${moduleName}`);
  console.log(`   Found ${mdFiles.length} markdown file(s)`);
  if (usingFrontmatter) {
    console.log(`   Using assets folder from frontmatter: '${assetsFolderName}'`);
  }
  
  // Read all markdown files
  let allMdContent = '';
  mdFiles.forEach(mdFile => {
    const content = fs.readFileSync(mdFile, 'utf8');
    allMdContent += content + '\n';
  });
  
  let deletedCount = 0;
  let keptCount = 0;
  
  // Get all image files
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'];
  const assetFiles = fs.readdirSync(assetsDir)
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()));
  
  assetFiles.forEach(assetFile => {
    // Check if asset is referenced in any markdown file
    const isReferenced = allMdContent.includes(`${assetsFolderName}/${assetFile}`) || 
                        allMdContent.includes(assetFile);
    
    if (isReferenced) {
      keptCount++;
    } else {
      if (FIX_MODE) {
        fs.unlinkSync(path.join(assetsDir, assetFile));
        console.log(`   ❌ Deleted: ${assetFile}`);
      } else {
        console.log(`   🔍 Would delete: ${assetFile}`);
      }
      deletedCount++;
    }
  });
  
  console.log(`   ✅ Kept: ${keptCount} assets`);
  console.log(`   ${FIX_MODE ? '❌ Deleted' : '🔍 Would delete'}: ${deletedCount} assets\n`);
}

// Main execution
// Determine target directory
let targetDir;
if (targetDirArg) {
  // Use provided directory (can be relative or absolute)
  targetDir = path.isAbsolute(targetDirArg) 
    ? targetDirArg 
    : path.join(process.cwd(), targetDirArg);
} else {
  // Default to modules directory relative to project root
  targetDir = path.join(__dirname, '..', '..', 'modules');
}

console.log(`📁 Target directory: ${targetDir}\n`);

if (!fs.existsSync(targetDir)) {
  console.error(`❌ Error: Target directory does not exist: ${targetDir}`);
  process.exit(1);
}

const subdirs = fs.readdirSync(targetDir)
  .filter(item => fs.statSync(path.join(targetDir, item)).isDirectory());

if (subdirs.length === 0) {
  console.log('⚠️  No subdirectories found in target directory');
  process.exit(0);
}

subdirs.forEach(subdirName => {
  const subdirPath = path.join(targetDir, subdirName);
  
  // Find all markdown files in this subdirectory
  let mdFiles = [];
  try {
    const files = fs.readdirSync(subdirPath);
    mdFiles = files
      .filter(f => f.endsWith('.md'))
      .map(f => path.join(subdirPath, f));
  } catch (error) {
    console.log(`⚠️  Error reading directory: ${subdirPath}`);
    return;
  }
  
  // Determine assets folder name - check frontmatter first (takes precedence)
  let assetsFolderName = ASSETS_FOLDER_NAME;
  let usingFrontmatter = false;
  
  for (const mdFile of mdFiles) {
    const frontmatterAssetsDir = extractAssetsDirFromFrontmatter(mdFile);
    if (frontmatterAssetsDir) {
      assetsFolderName = frontmatterAssetsDir;
      usingFrontmatter = true;
      break; // Use the first one found
    }
  }
  
  const assetsDir = path.join(subdirPath, assetsFolderName);
  
  // Only process if assets directory exists
  if (fs.existsSync(assetsDir)) {
    cleanModuleAssets(mdFiles, assetsDir, subdirName, assetsFolderName, usingFrontmatter);
  }
});

console.log('==========================================');
console.log('✨ Cleanup Complete!');
console.log('==========================================\n');

if (!FIX_MODE) {
  console.log('ℹ️  This was a preview. Run with --fix to actually delete unreferenced files.');
}