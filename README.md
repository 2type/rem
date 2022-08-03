# less-rem


**/less/demo.less**
```less
@import "./rem";
.demo {
    width:rem(750);
    height:rem(114);
    box-shadow: rem(13) rem(25) rem(37.62) pink;
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

[less-plugin-functions](https://www.npmjs.com/package/less-plugin-functions)

**/less/rem.less**
```less
// 关键需要 less-plugin-functions 来给 less 提供自定义函数支持
// You need less-plugin-functions  https://www.npmjs.com/package/less-plugin-functions
.function {
    .rem(@size) {
        // 750 是设计稿宽度
        // 750 is psd width
        return: @size./(750/320*16)+0rem;
    }
}
```

**view demo**
![](data:image/png;base64,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)

http://2type.github.io/rem/index.html


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

git clone https://github.com/2type/rem.git
# or
https://github.com/2type/rem/archive/gh-pages.zip

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
