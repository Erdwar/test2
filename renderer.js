

const information = document.getElementById("info");
//全局变量可以通过window.xxx 或者直接xxx进行访问
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${window.versions.node()}), 和 Electron (v${versions.electron()})`
const func = async ()=>{
  const respose = await versions.ping();
  console.log(respose);
}
func();