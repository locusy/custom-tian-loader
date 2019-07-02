let loaderUtils = require('loader-utils');

module.exports = function(source) {
  let options = loaderUtils.getOptions(this) || {};
  source = source.replace(/(\/static\/)(.*?\.(png|jpe?g|gif|webp))/g, options.replace + '$2');
  return source
}