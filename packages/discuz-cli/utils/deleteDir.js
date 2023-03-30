const fs = require('fs');
const path = require('path');

function rmDirWideSync(dir) {
  let arr = [dir]; // 存储数组
  let index = 0; // 指针
  let current; // 当前指针指向的元素
  while (current = arr[index]) {
    const statObj = fs.statSync(current);
    if (statObj.isDirectory()) {
      const dirArr = fs.readdirSync(current).map(d => path.join(current, d));
      arr = [...arr, ...dirArr];
    }
    index++;
  }
  for (let i = arr.length - 1; i >= 0; i--) { // 倒序删除，先删除子级，再删除父级
    const statObj = fs.statSync(arr[i]);
    if (statObj.isDirectory()) {
      fs.rmdirSync(arr[i]);
    } else {
      fs.unlinkSync(arr[i]);
    }
  }
}
module.exports = rmDirWideSync;
