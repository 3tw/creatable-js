const mix = require('laravel-mix')

mix
  .js(['app/app.js', 'app/demo.js'], 'demo/demo.js')
  .js('app/app.js', 'dist/create-element.js')
