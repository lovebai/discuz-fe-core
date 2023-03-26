const cwd = process.cwd();
const path = require('path');
module.exports = (config, options) => {
  config.resolve.modules = [
    path.resolve(cwd, './node_modules'),
    // 联调测试用，本地link
    path.resolve(cwd, './node_modules/@discuzqfe/cli/node_modules'),
    path.resolve(cwd, './node_modules/@discuzqfe/sdk/node_modules'),
    path.resolve(cwd, './node_modules/@discuzqfe/design/node_modules'),

  ];
  return config;
};
