import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import jison from 'gulp-jison';
import plumber from 'gulp-plumber';

gulp.task('jison', () =>
  gulp.src('lib/parser/*.jison')
    .pipe(plumber())
    .pipe(jison({ moduleType: 'commonjs' }))
    .pipe(gulp.dest('lib/parser/'))
);

gulp.task('start', () => {
  nodemon({
    script: 'index.js',
    ext: 'js'
  });
});

gulp.task('default', ['start'], () => {
  gulp.watch('jison/*.jison', ['jison']);
});
