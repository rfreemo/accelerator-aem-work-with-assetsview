#!/usr/bin/env node

/**
 * YAML Manifests Update Tool
 * 
 * Updates timestamp, copyright year, and project title in YAML manifest files.
 * 
 * Usage:
 *   node update-manifests.js [path] [--fix]
 * 
 * Arguments:
 *   path                        Path to manifests directory (relative or absolute)
 *                               Default: script directory
 *   --fix                       Apply changes and skip interactive prompts (default is dry-run mode)
 * 
 * Modes:
 *   Interactive (without --fix): Asks separately whether to update timestamps and/or project name
 *   Automated (with --fix):      Auto-updates timestamps, keeps current project name, no prompts
 * 
 * Examples:
 *   node update-manifests.js                        # Interactive dry run in script directory
 *   node update-manifests.js --fix                  # Automated update in script directory
 *   node update-manifests.js devops                 # Interactive dry run in ./devops
 *   node update-manifests.js devops --fix           # Automated update in ./devops
 *   node update-manifests.js /abs/path --fix        # Automated update with absolute path
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const readline = require('readline');

// Parse command line arguments
const args = process.argv.slice(2);
const FIX_MODE = args.includes('--fix');

// Parse manifests directory argument (first positional parameter that's not a flag)
let manifestsDir = __dirname; // Default to script directory
const positionalArgs = args.filter(arg => !arg.startsWith('--'));

if (positionalArgs.length > 0) {
  const providedPath = positionalArgs[0];
  // Handle both relative and absolute paths
  manifestsDir = path.isAbsolute(providedPath) 
    ? providedPath 
    : path.resolve(process.cwd(), providedPath);
  
  // Verify the directory exists
  if (!fs.existsSync(manifestsDir)) {
    console.error(`✗ Error: Manifests directory does not exist: ${manifestsDir}`);
    process.exit(1);
  }
  if (!fs.statSync(manifestsDir).isDirectory()) {
    console.error(`✗ Error: Path is not a directory: ${manifestsDir}`);
    process.exit(1);
  }
}

// Script directory (kept for reference)
const scriptDir = manifestsDir;

/**
 * Builds the UPDATE_MANIFESTS configuration
 * Update this object to add/modify manifest files and their configurations
 */
function getUpdateManifests(TITLE, TIMESTAMP, COPYRIGHT_YEAR, updateTimestamps = true) {
  const mainReplace = {
    '<!--{courseTitle}-->': TITLE,
  };
  
  const otherReplace = {
    '<!--{title}-->': TITLE,
  };
  
  // Only include timestamp fields if we're updating them
  if (updateTimestamps) {
    mainReplace['<!--{timestamp}-->'] = TIMESTAMP;
    mainReplace['<!--{copyrightYear}-->'] = COPYRIGHT_YEAR;
    otherReplace['<!--{timestamp}-->'] = TIMESTAMP;
  }
  
  return {
    main: {
      name: 'manifest.yml',
      manifest: {
        output: {
          name: `merged/guide/${TITLE}.md`
        },
        replace: mainReplace
      }
    },
    instructor: {
      name: 'instructor-notes.yml',
      manifest: {
        replace: otherReplace
      }
    },
    env: {
      name: 'environment-updates.yml',
      manifest: {
        replace: otherReplace
      }
    }
  };
}

/**
 * Reads the current title from the first manifest file
 * @param {object} manifestsConfig - The UPDATE_MANIFESTS configuration
 * @returns {Promise<string|null>} The current title or null if failed
 */
async function getCurrentTitle(manifestsConfig) {
  try {
    // Get the first entry's filename
    const firstEntry = Object.values(manifestsConfig)[0];
    const firstManifestFile = firstEntry.name;
    const manifestPath = path.join(scriptDir, firstManifestFile);
    
    if (!fs.existsSync(manifestPath)) {
      console.error(`✗ Error: ${firstManifestFile} not found`);
      return null;
    }
    
    const fileContents = fs.readFileSync(manifestPath, 'utf8');
    let yamlData = yaml.load(fileContents);
    
    const existingTitle = yamlData?.replace?.['<!--{courseTitle}-->'];
    
    if (!existingTitle) {
      console.log(`⚠ No title found in ${firstManifestFile}`);
      const addResponse = await promptUser('Do you want to add one? [y/n]: ');
      
      if (addResponse.toLowerCase() === 'y' || addResponse.toLowerCase() === 'yes') {
        const newTitle = await promptUser('Enter project name: ');
        
        if (newTitle && newTitle.trim()) {
          const title = newTitle.trim();
          
          // Add the title to the YAML file
          if (!yamlData.replace) {
            yamlData.replace = {};
          }
          yamlData.replace['<!--{courseTitle}-->'] = title;
          
          // Write back to file
          const yamlStr = yaml.dump(yamlData, {
            lineWidth: -1,
            noRefs: true
          });
          fs.writeFileSync(manifestPath, yamlStr, 'utf8');
          console.log(`✓ Added title to ${firstManifestFile}\n`);
          
          return title;
        } else {
          console.log('⚠ No title provided');
          return null;
        }
      } else {
        console.log('⚠ Cannot continue without a project name');
        return null;
      }
    }
    
    return existingTitle;
  } catch (error) {
    console.error('✗ Error reading current title:', error.message);
    return null;
  }
}

/**
 * Prompts the user for input
 * @param {string} question - The question to ask
 * @returns {Promise<string>} The user's response
 */
function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

/**
 * Updates a YAML file based on the provided configuration
 * @param {string} filePath - Path to the YAML file
 * @param {object} config - Configuration object with 'output' and/or 'replace' properties
 */
function updateYamlFile(filePath, config) {
  try {
    // Read and parse the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const yamlData = yaml.load(fileContents);
    
    let modified = false;
    
    // Process each section (output, replace, etc.)
    for (const [section, updates] of Object.entries(config)) {
      if (!yamlData[section]) {
        console.log(`  ⚠ Warning: '${section}' section not found in YAML file, skipping ${section} updates`);
      } else {
        for (const [key, value] of Object.entries(updates)) {
          if (yamlData[section][key] !== value) {
            yamlData[section][key] = value;
            modified = true;
            console.log(`  ${section}.${key} to: ${value}`);
          }
        }
      }
    }
    
    if (modified) {
      if (FIX_MODE) {
        // Write back to file
        const yamlStr = yaml.dump(yamlData, {
          lineWidth: -1, // Don't wrap lines
          noRefs: true    // Don't use anchors/aliases
        });
        fs.writeFileSync(filePath, yamlStr, 'utf8');
        console.log(`✓ Successfully updated ${path.basename(filePath)}\n`);
      } 
    } else {
      console.log(`  No changes needed\n`);
    }
    
  } catch (error) {
    console.error(`✗ Error updating ${path.basename(filePath)}:`, error.message);
    console.error(`  ${error.stack}\n`);
  }
}

// Main execution
async function main() {
  console.log('\n=== YAML Manifests Update Tool ===\n');
  
  // Show current manifests directory if not default
  if (manifestsDir !== __dirname) {
    console.log(`Manifests directory: ${manifestsDir}\n`);
  }
  
  // Get current date values
  const now = new Date();
  let TIMESTAMP = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  let COPYRIGHT_YEAR = now.getFullYear().toString();
  
  // In interactive mode, ask if user wants to update timestamps
  let updateTimestamps = true; // Default to true in fix mode
  if (!FIX_MODE) {
    const timestampResponse = await promptUser(`Update timestamps to ${TIMESTAMP}? [y/n]: `);
    updateTimestamps = (timestampResponse.toLowerCase() === 'y' || timestampResponse.toLowerCase() === 'yes');
    
    if (!updateTimestamps) {
      console.log('✓ Keeping existing timestamps\n');
    } else {
      console.log('✓ Will update timestamps\n');
    }
  }
  
  // Build a temporary manifests config to read the current title
  const tempManifests = getUpdateManifests('', TIMESTAMP, COPYRIGHT_YEAR);
  let currentTitle = await getCurrentTitle(tempManifests);
  
  if (!currentTitle) {
    console.error('✗ Could not read current title from the first manifest file');
    process.exit(1);
  }
  
  console.log(`Current project name: "${currentTitle}"\n`);
  
  let TITLE = currentTitle;
  
  // Only prompt for new project name in interactive mode (not in fix mode)
  if (!FIX_MODE) {
    const newTitleResponse = await promptUser('Enter new project name (n to skip): ');
    
    if (newTitleResponse && newTitleResponse.toLowerCase() !== 'n' && newTitleResponse.trim()) {
      TITLE = newTitleResponse.trim();
      console.log(`\n✓ Project name updated to: "${TITLE}"\n`);
    } else {
      console.log('\n✓ Keeping current project name\n');
    }
  } else {
    console.log('✓ Using current project name (fix mode)\n');
  }
  
  // Generate final configuration with the chosen title and timestamps
  // Note: If updateTimestamps is false, the updateYamlFile function will skip timestamp updates
  const UPDATE_MANIFESTS = getUpdateManifests(TITLE, TIMESTAMP, COPYRIGHT_YEAR, updateTimestamps);
  
  console.log(`Mode: ${FIX_MODE ? 'FIX (making changes)' : 'DRY RUN (preview only)'}`);
  console.log(`Title: ${TITLE}`);
  if (updateTimestamps) {
    console.log(`Timestamp: ${TIMESTAMP}`);
    console.log(`Copyright Year: ${COPYRIGHT_YEAR}`);
  } else {
    console.log(`Timestamps: Not updating (keeping existing)`);
  }
  console.log('');
  
  if (!FIX_MODE) console.log(`[DRY RUN] re-run with --fix to apply changes)\n`);
  
  // Process all files defined in UPDATE_MANIFESTS
  for (const [key, entry] of Object.entries(UPDATE_MANIFESTS)) {
    const filePath = path.join(scriptDir, entry.name);
    
    // Check if file exists before attempting to update
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${entry.name}: File not found\n`);
      continue;
    }
    
    console.log(`${entry.name}:`);
    updateYamlFile(filePath, entry.manifest);
  }
  
  console.log('\n=== Complete ===');
  if (!FIX_MODE) {
    console.log('\n💡 This was a dry run. To apply changes, run with --fix flag\n');
  } else {
    console.log();
  }
}

// Run main function
main().catch(error => {
  console.error('✗ Fatal error:', error.message);
  process.exit(1);
});
