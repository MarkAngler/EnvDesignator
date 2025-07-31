// Set up default patterns on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get({ patterns: [] }, (data) => {
    if (data.patterns.length === 0) {
      const defaultPatterns = [
        { urlPattern: '*://localhost*', color: '#ff0000' },
        { urlPattern: '*://*.dev.*', color: '#0000ff' },
        { urlPattern: '*://*.staging.*', color: '#ffa500' }
      ];
      chrome.storage.sync.set({ patterns: defaultPatterns });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab's URL has changed
  if (changeInfo.url && tab.url) {
    chrome.storage.sync.get({ patterns: [] }, (data) => {
      const matchingPattern = data.patterns.find(p => {
        try {
          // Convert wildcard to regex
          const regex = new RegExp(p.urlPattern.replace(/\*/g, '.*'));
          return regex.test(tab.url);
        } catch (e) {
          console.error('Invalid pattern:', p.urlPattern, e);
          return false;
        }
      });

      if (matchingPattern) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ['content.js']
        }, () => {
          // After the script is injected, send the color to it
          chrome.tabs.sendMessage(tabId, { color: matchingPattern.color });
        });
      }
    });
  }
});
