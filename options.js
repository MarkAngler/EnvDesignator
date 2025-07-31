document.addEventListener('DOMContentLoaded', () => {
  const addPatternForm = document.getElementById('add-pattern-form');
  const urlPatternInput = document.getElementById('url-pattern');
  const colorPicker = document.getElementById('color-picker');
  const patternsList = document.getElementById('patterns-list');

  // Load patterns from storage and display them
  const loadPatterns = () => {
    chrome.storage.sync.get({ patterns: [] }, (data) => {
      patternsList.innerHTML = '';
      data.patterns.forEach((pattern, index) => {
        const listItem = document.createElement('li');

        const patternText = document.createElement('span');
        patternText.textContent = `${pattern.urlPattern} - `;

        const colorBox = document.createElement('span');
        colorBox.style.backgroundColor = pattern.color;
        colorBox.className = 'color-box';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deletePattern(index);
        });

        listItem.appendChild(patternText);
        listItem.appendChild(colorBox);
        listItem.appendChild(deleteButton);
        patternsList.appendChild(listItem);
      });
    });
  };

  // Add a new pattern
  addPatternForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const urlPattern = urlPatternInput.value;
    const color = colorPicker.value;

    chrome.storage.sync.get({ patterns: [] }, (data) => {
      const patterns = data.patterns;
      patterns.push({ urlPattern, color });
      chrome.storage.sync.set({ patterns }, () => {
        urlPatternInput.value = '';
        loadPatterns();
      });
    });
  });

  // Delete a pattern
  const deletePattern = (index) => {
    chrome.storage.sync.get({ patterns: [] }, (data) => {
      const patterns = data.patterns;
      patterns.splice(index, 1);
      chrome.storage.sync.set({ patterns }, () => {
        loadPatterns();
      });
    });
  };

  // Initial load
  loadPatterns();
});
