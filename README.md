# example-electron-hang

**Clone and run for a quick way to see Electron inaction.**

This is a minimal Electron application designed to demonstrate [this issue](https://github.com/electron/electron/issues/27457) in the simplest way possible. 

This Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `page2.html` - A web page to render in the iframe.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/Patronics/example-electron-hang.git
# Go into the repository
cd example-electron-hang
# Install dependencies
npm install
# Run the app
npm start
#observe the brokeneness, see the issue and index.html's comments for more details.
```
