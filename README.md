# mat-rewrite

[![npm version](https://badge.fury.io/js/mat-rewrite.svg)](http://badge.fury.io/js/mat-rewrite)

## Installation

```sh
npm install --save-dev mat-rewrite
```

## Usage

```javascript
var mat     = require('mat')
var rewrite = require('mat-rewrite')

// 重写'-min.js'为'.js'
mat.task('default', function () {
  mat.url([/\.[js|css]/])
    .use(rewrite([
      [/-min\.js/g, '.js'],
      [/\.css/g, '.less']
    ]))
})
```