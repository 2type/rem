# lessrem


**/less/demo.less**
```less
@import "./rem";
.demo {
    width:rem(640);
    height:rem(100);
    box-shadow: rem(11) rem(22) rem(33) pink;
    background: #eee;
}
```

**/dist/demo.css**
```css
.demo {
  width: 20rem;
  height: 3.125rem;
  box-shadow: 0.34375rem 0.6875rem 1.03125rem pink;
  background: #eee;
}
```

**/less/rem.less**
```less
// 关键需要 less-plugin-functions 来给 less 提供自定义函数支持
// You need less-plugin-functions
.function {
    .rem(@size) {
        // 640 是设计稿宽度
        // 640 is psd width
        return: @size/(640/320*16)+0rem;
    }
}
```

**view demo**
![](data:image/png;base64,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)

http://fast-flow.github.io/lessrem/index.html


# gulpfile.js

```js
var gulp = require('gulp')
var less = require('gulp-less')
var LessPluginFunctions = require('less-plugin-functions')
gulp.task('less', function () {
    gulp.src('less/**.less')
        .pipe(less({
            // less-plugin-functions is Important
            // less-plugin-functions 为 less 提供自定义函数功能
            plugins: [
                new LessPluginFunctions()
            ]
        }))
        .pipe(gulp.dest('dist/css'))
});
```

**package.json**
```js
"dependencies": {
  "gulp": "^3.9.1",
  "gulp-less": "^3.1.0",
  "less-plugin-functions": "0.0.2"
}
```

## local test |  本地测试

```shell
git clone https://github.com/fast-flow/fast.git
# or
https://github.com/fast-flow/fast/archive/gh-pages.zip

cd lessrem
npm install
gulp
```


## fis-less

```js
var LessPluginFunctions = require('less-plugin-functions')
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        plugins: [
            new LessPluginFunctions()
        ]
    })
})
```
