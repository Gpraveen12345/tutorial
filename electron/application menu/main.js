const electron=require("electron");
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const path=require("path");
const url=require("url");

let win,dimwindow;

function createwindow(){
   /*win=new BrowserWindow();
   frameless=new BrowserWindow({frame : false});
   dimwindow=new BrowserWindow({width:400,height:400,maxWidth:600,maxHeight:700,backgroundColor:'#228b22'});
*/
parentwindow=new BrowserWindow({title:'parent'});
childwindow=new BrowserWindow({show:false,parent:parentwindow,modal:true, title:'child'});
childwindow.loadURL('https://www.youtube.com');
childwindow.once('ready-to-show',()=>{
   childwindow.show();
});
   /*win.loadURL(url.format({
      pathname: path.join(__dirname,"index.html"),
      protocol:"file",
      slashes:true
   }))
   win.on('closed',()=>{
      win=null;
   })*/
}
app.on("ready",createwindow);