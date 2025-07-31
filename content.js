chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.color) {
    const color = request.color;

    // Create a canvas to draw the new favicon
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');

    // Draw the colored circle
    ctx.beginPath();
    ctx.arc(8, 8, 8, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();

    // Get the data URL
    const dataUrl = canvas.toDataURL('image/png');

    // Find existing favicon links
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = dataUrl;
  }
});
