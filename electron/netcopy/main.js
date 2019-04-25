const { app, BrowserWindow } = require('electron')
const path=require("path");
const ElectronTitlebarWindows = require('electron-titlebar-windows');
const url=require("url");
let win
function createWindow () {
  win = new BrowserWindow({  frame:false,show:false,width: 800, height: 600,icon:__dirname+'./Icons/hightailmac.ico' });
  
  win.maximize();
  win.setMenuBarVisibility(false);
   win.loadURL(url.format({
    pathname: path.join(__dirname,"index.html"),
    protocol:"file",
    

 }));
 //win.loadURL("https://spaces.hightail.com/login")
 win.once('ready-to-show',()=>{
   win.show()
 })

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.