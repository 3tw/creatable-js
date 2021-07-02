const mix = require('laravel-mix')

mix
  .js(['src/index.js', 'src/demo.js'], 'demo/demo.js')
  .js('src/index.js', 'dist/create-element.js')
