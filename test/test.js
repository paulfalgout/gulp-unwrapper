var fs     = require('fs');
var gutil = require('gulp-util');
var unwrapper = require('../gulp-unwrapper');
var should = require('should');

function fixtureFile(fileName) {
  return new gutil.File({
    base: 'test/fixtures',
    cwd: 'test/',
    path: 'test/fixtures/' + fileName,
    contents: fs.readFileSync('test/fixtures/' + fileName)
  });
};

describe('unwrapping UMD modules', function() {
  it('should work', function(done) {
    var stream = unwrapper();
    var fakeFile = fixtureFile('sample.js');

    stream.once('data', function(newFile){
        should.exist(newFile);
        should.exist(newFile.contents);
        String(newFile.contents).should.equal(fs.readFileSync('test/fixtures/expected_output.js', 'utf8'));
        done();
    });
    stream.write(fakeFile);

  });
})
