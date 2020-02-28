/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const fancyLog = require('fancy-log');

const path = {
  client: {
    entries: ['src/client/index.tsx'],
    html: ['src/client/*.html'],
    dist: 'dist/client',
  },
};

gulp.task(
  'copy-html',
  gulp.series(function() {
    return gulp.src(path.client.html).pipe(gulp.dest(path.client.dist));
  }),
);

gulp.task(
  'bundle-javascript-dev',
  gulp.series(function() {
    return browserify({
      basedir: '.',
      debug: true,
      entries: path.client.entries,
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .transform('babelify', {
        presets: ['@babel/preset-env'],
        extensions: ['.ts', '.tsx'],
      })
      .bundle()
      .pipe(source('client.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.client.dist));
  }),
);

gulp.task('build-dev', gulp.parallel('copy-html', 'bundle-javascript-dev'));
gulp.task('default', gulp.series('build-dev'));

gulp.task(
  'watch-test',
  gulp.series('build-dev', function() {
    return gulp.watch('src/client/**/*', gulp.series('build-dev'));
  }),
);
