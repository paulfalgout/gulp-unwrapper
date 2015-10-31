<h1 align="center">gulp-unwrapper</h1>
<p align="center">
  <img width="300px" src="https://raw.githubusercontent.com/paulfalgout/gulp-unwrapper/master/logo.png"/>
</p>

A gulp plugin for [unwrap](https://github.com/samccone/unwrap).
[![Build Status](https://travis-ci.org/paulfalgout/gulp-unwrapper.svg)](https://travis-ci.org/paulfalgout/gulp-unwrapper)

## How To

`npm install gulp-unwrapper`

### API

```js
var unwrapper = require('gulp-unwrapper');

gulp.task('unwrap', function() {
  gulp.src(['./app/*.js'])
    .pipe(unwrapper())
    .pipe(gulp.dest('./dist/'))
});
```
