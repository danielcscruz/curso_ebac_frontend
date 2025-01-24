const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Caminhos 
const paths = {
    scss: './src/scss/**/*.scss',
    css: './dist/css/',
    js: './src/js/*.js',
    jsmin: './dist/js/',
    img: './src/img/*',
    imgmin: './dist/img/'
};


//Compilar Sass
function compilaSass() {
    return gulp
        .src(paths.scss)
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(gulp.dest(paths.css));
}

//Comprimir JS
function comprimeJs(){
    return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.jsmin));
}

// Otimizar imagens
function otimizarImagens(){
    return gulp.src(paths.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.imgmin));
}

  // Exporta as tarefas
exports.default = function(){
    gulp.watch(paths.scss, {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch(paths.js, {ignoreInitial: false}, gulp.series(comprimeJs));
    gulp.watch(paths.img, {ignoreInitial: false}, gulp.series(otimizarImagens));
}

