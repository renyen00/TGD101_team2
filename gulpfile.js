const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

//exports.可以自定義 = 函式名稱
//test console 列印在終端機上
// 如果要執行
//   gulp 自定義名稱
//   ex => exports.log = 函式名稱
// 執行 => gulp log

function tasking(params) {
    console.log('gulp ok');
    params(); //callback
}

exports.log = tasking

function mvfile(bbb) {
    // src('').pipe(dest(''))
    // 將 '檔案位置的檔案' 通過通道 到 '目錄位置' 目錄下
    // ./*.副檔名 => 將 所有附檔名為html的檔案
    return src('./*.html').pipe(dest('dist'));
}
exports.mv = mvfile;

function mvimages() {
    // 將 '檔案夾中所有檔案' 通過通道 到 '目錄位置' 目錄下
    // /*.* => 將 所有檔案
    return src(['./src/image/*.*','./src/image/**/*.*']).pipe(dest('dist/images'));
}

exports.mving = mvimages;

//同步跟異步
function tkA(cb) {
    console.log('missionA');
    cb();
}


function tkB(cb) {
    console.log('missionB');
    cb();
}

exports.async = series(tkA,tkB);//異步
exports.sync = parallel(tkA,tkB);//同步

//改名:打包完後改名字
const rename = require('gulp-rename');
//mini css => 壓縮 CSS
const cleanCSS = require('gulp-clean-css');
function minicss() {
    return src('./src/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({extname: '.min.css'})) //改的名稱
    .pipe(dest('dist/css'));
}

exports.css = minicss;

//mini js => 壓縮 JS
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function miniJs(params) {
    return src('./src/js/*.js')
    .pipe(uglify())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dist/js')); 
}
exports.js = miniJs;


//ES6 轉 ES5 的降轉函式 => 將ES6寫法的js 轉換成 較舊版本 的 ES5 的寫法
//test js ES6 => ES5
function babel5() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/js'));
}
exports.jsex = babel5

//sass壓縮
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

function stylesass(params) {
    return src('./src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
            cascade: false
    }))
    // .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/css')); 
}

exports.style = stylesass;

// html template

const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('./src/*.html') //來源
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist')); //目的地
}

exports.html = includeHTML;

exports.all = parallel(includeHTML , stylesass , miniJs , mvimages);



//監看
function wahtch(params) {
    // return watch() 監看結構
    // 監看單個資料路徑 : watch('',callback)
    // 監看多個資料路徑 : watch(['','',...],callback => (該檔案相關的函式))
    //這行是監看src中sass資料夾裡的所有scss 
    //　　　　跟src中sass資料夾裡所有資料夾中的所有scss
    watch(['./src/sass/*.scss','./src/sass/**/*.scss'],stylesass);

    //這行是監看src裡所有html 
    //　　　　 跟src中所有資料夾裡的所有html
    watch(['./src/*.html', './src/layout/*.html' ], series(includeHTML));

    //這行是監看src中js裡的所有js
    watch('src/js/*.js',miniJs);

    watch(['./src/images/*.*','./src/images/**/*.*'],mvimages)

}

// exports.w = wahtch;
exports.w = series(parallel(stylesass,includeHTML,miniJs,mvimages),wahtch);
// 先執行sass/ html/ js /images編譯  在執行warchfile監看

const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['./src/sass/*.scss','./src/sass/**/*.scss'],stylesass).on('change',reload); //sass
    watch(['./src/*.html', './src/layout/*.html' ], series(includeHTML)).on('change',reload); //html
    watch('src/js/*.js',miniJs).on('change',reload); //js
    watch(['./src/images/*.*','./src/images/**/*.*'],mvimages).on('change',reload); //image
    done();
}
const imagemin = require('gulp-imagemin');


//壓縮圖片 => 將圖片壓縮成比較小的檔案大小，但圖片品質也將變差。
function min_images(){
    return src(['src/images/*.*','src/images/**/*.*'])
    .pipe(imagemin([
        //三種方法擇其一壓縮，不能全部使用

        imagemin.mozjpeg({quality: 70, progressive: true}) // 壓縮品質 quality越低 -> 壓縮越大 -> 品質越差
        //imagemin.gifsicle({interlaced: true}), // gif  壓縮 
        //imagemin.optipng({optimizationLevel: 6}),// png 壓縮 數字越高 壓縮越大
    ]))
    .pipe(dest('dist/images/min'))
}


exports.minify = min_images;

//打包上線用 清除舊檔案
const clean = require('gulp-clean');

function clear() {
  return src('dist' ,{ read: false ,allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
  .pipe(clean({force: true})); //強制刪除檔案 
}

exports.clearS = clear;



//開發所使用的打包
exports.default = series(parallel(stylesass,includeHTML,miniJs,mvimages),browser);
//上線所使用的打包
exports.package = series(clear,parallel(stylesass,includeHTML,miniJs,min_images))