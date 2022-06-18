let mix = require('laravel-mix');

require('mix-html-builder');
require('laravel-mix-serve');

mix.js('src/js/app.js', 'dist/js').setPublicPath('dist');
mix.sass('src/scss/style.scss', 'dist/css').setPublicPath('dist');

mix.html({
    htmlRoot: './src/index.html', // Your html root file(s)
    output: './', // The html output folder
    partialRoot: './src/partials',    // default partial path
    layoutRoot: './src/layouts',    // default partial path
    minify: {
        removeComments: true
    }
});

mix.serve('serve dist -l 5000');
mix.disableNotifications();
// mix.copy('src/assets', 'dist/assets');
mix.browserSync('localhost:5000');