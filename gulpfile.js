var gulp = require('gulp')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')
var exec = require('child_process').exec

gulp.task('tsc', () => {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'))
})

gulp.task('exec', cb => {
  exec('node dist/main.js', function(err, stdout, stderr) {
    console.log(stdout)
    console.log('-----------------')
    cb(err)
  })
})

gulp.task('default', () => {
  gulp.watch('./src/**/*.ts', gulp.series('tsc', 'exec'))
})
