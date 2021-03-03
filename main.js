// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')



function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInSubFrames: true
    }
  })  //nodeIntegration and nodeIntegrationInSubFrames are both required to trigger the bug

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools, optional for testing the behavior
   mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

//this ipc server demonstrates example usage, but is not required to trigger the bug
const RawIPC = require('node-ipc').IPC;
const ipc = new RawIPC;
ipc.config.id="main";
ipc.config.silent=false;

ipc.serve(function () {
  ipc.server.on("test.data", 
    function (data, socket) {
      ipc.server.broadcast('test.data2', data); 
    })
    
    //ipc.server.broadcast("hello", "hello");
})
ipc.server.start();

