var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve('rosie'), '../rosie.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:rosie': ['factory', framework]};
