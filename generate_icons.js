const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size, color, filePath) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Draw a simple design
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = 'white';
  ctx.font = `${size / 2}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TC', size / 2, size / 2);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
  console.log(`Icon created at ${filePath}`);
}

// Create the icons directory if it doesn't exist
if (!fs.existsSync('icons')) {
  fs.mkdirSync('icons');
}

createIcon(16, '#4285F4', 'icons/icon16.png');
createIcon(48, '#4285F4', 'icons/icon48.png');
createIcon(128, '#4285F4', 'icons/icon128.png');
