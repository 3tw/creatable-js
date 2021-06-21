const mix = require('laravel-mix')

mix
  .js('app/app.js', 'demo', 'dist')

if (mix.inProduction()) {
  mix.version()
}
