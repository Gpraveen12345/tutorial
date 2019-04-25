const { app, BrowserWindow } = require('electron')
const path=require("path");
const url=require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window

function createWindow () {
  let win;
  var img_dir="C:/Users/pganesh/Desktop/electron/myapplication/img";
  win = new BrowserWindow({ width: 800, height: 600,icon:path.join(__dirname,img_dir,'icon.png')});
  // Create the browser window.
  window = new BrowserWindow({ width: 800, height: 600 })
}
app.on("ready",createWindow);
app.on('window-all-closed', () => {
   // On macOS it is common for applications and their menu bar
   // to stay active until the user quits explicitly with Cmd + Q
   if (process.platform !== 'darwin') {
     app.quit()
   }
 })
 
 /*app.on('activate', () => {
   // On macOS it's common to re-create a window in the app when the
   // dock icon is clicked and there are no other windows open.
   if (window === null) {
     createWindow()
   }*/
 //})