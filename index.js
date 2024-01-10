const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('node:path')
//app 主进程 BrowserWindow 渲染器进程
//app，它着您应用程序的事件生命周期。
// BrowserWindow，它负责创建和管理应用窗口。
const createView = ()=>{
  const win =  new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
  // win.loadFile('https://www.baidu.com/')
}

app.whenReady().then(()=>{
  //监听handle
  ipcMain.handle('ping', () => 'pong')
  createView()
  //解决mac上窗口的问题
  app.on('activate', ()=>{
    if (BrowserWindow.getAllWindows().length === 0) createView()
  })
})
app.on('window-all-closed', ()=>{
  //针对darwin关闭窗口
  if (process.platform !== 'darwin') app.quit()
})