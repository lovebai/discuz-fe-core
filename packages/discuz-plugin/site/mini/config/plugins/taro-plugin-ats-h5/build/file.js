"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const uppercamelcase = require("uppercamelcase");
const fileSave = require("file-save");
const helper_1 = require("@tarojs/helper");
const ast_1 = require("./ast");
const miniToWeb = (name, onlyExample) => {
    const ComponentName = uppercamelcase(name);
    // 获取目标文件路径
    let targetPaths = ['__examples__'];
    if (!onlyExample) {
        targetPaths.push('layouts');
    }
    targetPaths.forEach(item => {
        const targetDirPath = `${getRootPath(name)}/${item}`;
        // 获取目标文件路径
        const targetPath = `${targetDirPath}/mini`;
        handleFiles({ targetPath, targetDirPath, componentName: ComponentName });
    });
};
// 文件处理
const handleFiles = ({ targetPath, targetDirPath, componentName }) => {
    if (isDirec(targetPath)) {
        const files = fs.readdirSync(targetPath);
        // 若文件不存在，结束执行
        if (!files || !files.length) {
            console.log(helper_1.chalk.red.bold.bgWhite(`ats-h5: 没有找到${targetDirPath}下的文件`));
            return;
        }
        // 遍历处理文件夹中的tsx文件
        files.filter(item => item.endsWith('.tsx')).forEach((item) => {
            const miniComponentPath = `${targetPath}/${item}`;
            let res = ast_1.default(miniComponentPath, componentName);
            saveFile(`${targetDirPath}/web/${item}`, res);
        });
    }
    else {
        const miniComponentPath = `${targetPath}.tsx`;
        // 若文件不存在，结束执行
        if (!fs.existsSync(miniComponentPath)) {
            console.log(helper_1.chalk.red.bold.bgWhite(`ats-h5: 没有找到${targetDirPath}下的文件`));
            return;
        }
        let res = ast_1.default(miniComponentPath, componentName);
        saveFile(`${targetDirPath}/web.tsx`, res);
    }
};
// 判断是以文件夹还是单文件形式书写
const isDirec = (targetPath) => {
    let isBool = false;
    try {
        const stat = fs.statSync(targetPath);
        isBool = stat.isDirectory();
    }
    catch (error) {
        isBool = false;
    }
    return isBool;
};
// 写文件
const saveFile = (path, content) => {
    fileSave(path).write(content, "utf8").end();
};
// 获取组件的layout文件夹路径
const getRootPath = (name) => {
    return path.resolve(__dirname, `../../../../../../components/${name}`);
};
exports.default = miniToWeb;
//# sourceMappingURL=file.js.map