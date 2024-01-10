// BrowserWindow 的预加载脚本运行在具有 
// HTML DOM 和 Node.js、Electron API 的有限子集访问权限的环境中。
//包含在浏览器窗口加载网页之前运行的代码
const {contextBridge,ipcRenderer} = require('electron')
//定义全局变量

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 除函数之外，我们也可以暴露变量
  //触发该处理程序
  ping: () => ipcRenderer.invoke('ping')
})