var map = require('map-stream');
var unwrap = require('unwrap');

module.exports = function() {

  function unwrapStream(file, callback) {
    if (file.isNull()) {
      return callback(null, file); // pass along
    }
    if (file.isStream()) {
      return callback(new Error('gulp-unwrapper: Streaming not supported'));
    }

    unwrap(file.path, function(err, content){
      if (err) {
        return callback(err);
      }
      file.contents = new Buffer(content);
      callback(null, file);
    });
  }

  return map(unwrapStream);
};
