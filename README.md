# Tab Colorizer Chrome/Edge Extension

This extension allows you to color-code your browser tabs based on URL patterns. This is useful for easily distinguishing between different environments, such as development, staging, and production.

## How to Install

1.  **Download the extension files:** Clone this repository or download the files as a ZIP and extract them to a local folder.
2.  **Open Chrome/Edge extensions page:**
    *   In Chrome, navigate to `chrome://extensions`.
    *   In Edge, navigate to `edge://extensions`.
3.  **Enable Developer Mode:** In the top right corner of the extensions page, toggle the "Developer mode" switch to on.
4.  **Load the extension:**
    *   Click on the "Load unpacked" button that appears.
    *   Select the directory where you saved the extension files.
5.  The "Tab Colorizer" extension should now be installed and visible in your extensions list.

## How to Use

1.  **Open the options page:** Click on the Tab Colorizer icon in your browser's toolbar to open the options popup.
2.  **Add a new pattern:**
    *   In the "URL Pattern" input field, enter a URL pattern. The pattern uses wildcards (`*`) to match URLs. For example, `*://*.google.com/*` will match all Google domains.
    *   Use the color picker to select a color for this pattern.
    *   Click "Add Pattern".
3.  **Manage patterns:**
    *   Your saved patterns will be listed below the form.
    *   You can delete a pattern by clicking the "Delete" button next to it.
4.  **See it in action:** When you navigate to a URL that matches one of your saved patterns, the tab's favicon will change to the color you selected.

## Default Patterns

The extension comes with a few default patterns to get you started:

*   `*://localhost*` - Red
*   `*://*.dev.*` - Blue
*   `*://*.staging.*` - Orange

You can delete or modify these as you see fit.
