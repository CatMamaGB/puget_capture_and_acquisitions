const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'favicon.ico',
  'favicon.svg',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-96x96.png',
  'favicon-144x144.png',
  'favicon-192x192.png',
  'favicon-512x512.png',
  'apple-touch-icon.png',
  'manifest.json'
];

const publicDir = path.join(__dirname, 'public');

console.log('Checking favicon files...\n');

requiredFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} is missing!`);
  }
});

// Check manifest.json content
const manifestPath = path.join(publicDir, 'manifest.json');
if (fs.existsSync(manifestPath)) {
  const manifest = require(manifestPath);
  console.log('\nChecking manifest.json content...');
  console.log(`Name: ${manifest.name}`);
  console.log(`Short name: ${manifest.short_name}`);
  console.log(`Icons count: ${manifest.icons.length}`);
} 