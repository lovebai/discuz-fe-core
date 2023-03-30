const webpack = require('webpack');

module.exports = config => new Promise((resolve, reject) => {
  let compiler;
  try {
    compiler = webpack(config);
    resolve({ compiler, config });
  } catch (err) {
    reject(err);
  }
});
