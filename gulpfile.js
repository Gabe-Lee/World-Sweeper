/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const gulp = require('gulp');
const watchify = require('watchify');
const browserify = require('browserify');
const connect = require('gulp-connect');
// const browserifyInc = require('browserify-incremental');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const log = require('fancy-log');
// const bro = require('gulp-bro');
// const ts = require('gulp-typescript');
// const _ = require('lodash');
const gif = require('gulp-if');
const clean = require('gulp-clean');
const duration = require('gulp-duration');

const path = {
  client: {
    all: 'src/client/**/*',
    entries: ['src/client/index.tsx'],
    libs: ['react', 'react-dom', 'lodash', 'axios', 'pixi.js', 'redux', 'redux-thunk', 'react-jss'],
    scripts: ['src/client/**/*.ts', 'src/client/**/*.tsx'],
    html: 'src/client/*.html',
    dist: 'dist/client',
    distAll: 'dist/client/**/*',
  },
};

const clientTSConfig = {
  esModuleInterop: true,
  moduleResolution: 'node',
  target: 'es5',
  allowSyntheticDefaultImports: true,
  jsx: 'react',
  transpileOnly: true,
};

// const pipeline = (initial, ...functions) => functions.reduce((value, func) => func(value), initial);

function cleanClient() {
  return gulp.src(path.client.distAll, { read: false }).pipe(clean());
}

function bundleClient(debug = false, watch = false, test = false) {
  const files = browserify({
    basedir: '.',
    debug: debug,
    entries: path.client.entries,
    cache: {},
    packageCache: {},
  }).plugin(tsify, clientTSConfig);

  function build() {
    return files
      .bundle()
      .pipe(source('client.js'))
      .pipe(buffer())
      .pipe(gif(debug, sourcemaps.init({ loadMaps: true })))
      .pipe(gif(debug, sourcemaps.write('./')))
      .pipe(gulp.dest(path.client.dist))
      .pipe(connect.reload());
  }

  function testBuild() {
    const bundleTime = duration('bundle time');
    const sourceTime = duration('source time');
    const bufferTime = duration('buffer time');
    const mapInitTime = duration('mapInit time');
    const mapWriteTime = duration('mapWrite time');
    const fileWriteTime = duration('fileWrite time');
    return files
      .bundle()
      .pipe(bundleTime)
      .once('data', sourceTime.start)
      .pipe(source('client.js'))
      .pipe(sourceTime)
      .once('data', bufferTime.start)
      .pipe(buffer())
      .pipe(bufferTime)
      .once('data', mapInitTime.start)
      .pipe(gif(debug, sourcemaps.init({ loadMaps: true })))
      .pipe(mapInitTime)
      .once('data', mapWriteTime.start)
      .pipe(gif(debug, sourcemaps.write('./')))
      .pipe(mapWriteTime)
      .once('data', fileWriteTime.start)
      .pipe(gulp.dest(path.client.dist))
      .pipe(fileWriteTime)
      .pipe(connect.reload());
  }

  if (debug) {
    files.external(path.client.libs);
  }

  if (watch) {
    files
      .plugin(watchify, { delay: 50 })
      .on('update', () => {
        log('change detected');
        return test ? testBuild() : build();
      })
      .on('time', ms => log(`finished rebuild in ${ms}ms`));
  }

  return test ? testBuild() : build();
}

function bundleWatchDevClient() {
  return bundleClient(true, true);
}

function bundleWatchDevClientTest() {
  return bundleClient(true, true, true);
}

function bundleClientLibs() {
  return browserify({
    debug: true,
    cache: {},
    packageCache: {},
    require: path.client.libs,
  })
    .bundle()
    .pipe(source('Vendor.js'))
    .pipe(gulp.dest(path.client.dist));
}

function startDevServer() {
  return connect.server({
    root: 'dist/client',
    livereload: true,
  });
}

gulp.task(
  'copy-html',
  gulp.series(function copyHTML() {
    return gulp.src(path.client.html).pipe(gulp.dest(path.client.dist));
  }),
);

gulp.task('clean-client');

function copyHTML() {
  return gulp.src(path.client.html).pipe(gulp.dest(path.client.dist));
}

gulp.task('default', gulp.series(copyHTML, bundleClient));
gulp.task('watch', gulp.series(cleanClient, copyHTML, bundleWatchDevClient));
gulp.task('watch-test', gulp.series(cleanClient, copyHTML, bundleClientLibs, bundleWatchDevClientTest, startDevServer));
