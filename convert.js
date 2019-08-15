const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminJpegtran = require('imagemin-jpegtran');

imagemin(['resized/*.{jpg,png}'], {
  destination: 'build',
  plugins: [
    imageminWebp({ quality: 60 }),
    // imageminJpegtran({ progressive: false })
  ]
}).then(() => {
  console.log('Images optimized');
});