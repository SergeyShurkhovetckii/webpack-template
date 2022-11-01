// note: npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
module.exports = {
  plugins: [
    require('css-mqpacker'),
    require('cssnano'),
    require('autoprefixer'),
  ]
}